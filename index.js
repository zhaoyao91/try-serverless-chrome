const {Chromeless} = require('chromeless')
const CDP = require('chrome-remote-interface')

const provideChrome = require('./provide_chrome')

/**
 * demo on how to interact with chrome by using chromeless (with high level apis)
 */
function chromelessHandler (event, context, callback) {
  provideChrome(callback, chrome => {
    const chromeless = new Chromeless()
    chromeless
      .goto('https://www.google.com')
      .type('chromeless', 'input[name="q"]')
      .press(13)
      .wait('#resultStats')
      .html()
      .then(data => callback(null, data))
      .catch(err => callback(err))
      .then(() => chromeless.end()) // remember to end chromeless before leaving
  })
}

/**
 * demo on how to interact with chrome by using chrome-remote-interface (with low level apis)
 */
function CDPHandler (event, context, callback) {
  provideChrome(callback, chrome => {
    CDP((client) => {
      // extract domains
      const {Network, Page} = client

      // setup handlers
      Network.requestWillBeSent((params) => {
        console.log(params.request.url)
      })
      Page.loadEventFired(() => {
        client.close()
      })

      // enable events then start!
      Promise.all([
        Network.enable(),
        Page.enable()
      ])
        .then(() => Page.navigate({url: 'https://github.com'}))
        .catch(err => {
          console.error(err)
          client.close()
        })
    }).on('error', (err) => {
      // cannot connect to the remote endpoint
      console.error(err)
    })
  })
}

module.exports = {
  chromelessHandler,
  CDPHandler,
}