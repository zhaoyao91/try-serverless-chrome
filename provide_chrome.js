const launchChrome = require('@serverless-chrome/lambda')

let chrome

const launchParams = {
  flags: ['--window-size=1440,900', '--hide-scrollbars'],
}

function provideChrome (callback) {
  if (!chrome) {
    launchChrome(launchParams)
      .then(_chrome => {
        chrome = _chrome
        callback(null, chrome)
      })
      .catch(callback)
  }
  else {
    callback(null, chrome)
  }
}

module.exports = provideChrome