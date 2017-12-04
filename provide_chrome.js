const launchChrome = require('@serverless-chrome/lambda')

let chrome

const launchParams = {
  flags: ['--window-size=1440,900', '--hide-scrollbars'],
}

function provideChrome (onError, onSuccess) {
  if (!chrome) {
    launchChrome(launchParams)
      .then(_chrome => {
        chrome = _chrome
        onSuccess(chrome)
      })
      .catch(onError)
  }
  else {
    onSuccess(chrome)
  }
}

module.exports = provideChrome