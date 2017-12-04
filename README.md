# Try Serverless Chrome

Demo repo to try serverless-chrome.

## Concepts

- [headless browser](https://en.wikipedia.org/wiki/Headless_browser): web browser without GUI
- [headless chrome](https://developers.google.com/web/updates/2017/04/headless-chrome): chrome instance without GUI
- [serverless-chrome/lambda](https://github.com/adieuadieu/serverless-chrome/tree/master/packages/lambda): a npm package
shipped with headless chrome bin for lambda environment, which can launch headless chrome in lambda handlers
- [CDP](https://chromedevtools.github.io/devtools-protocol): The Chrome DevTools Protocol allows for tools to instrument,
inspect, debug and profile Chromium, Chrome and other Blink-based browsers
- chrome remote interface: programmatic interface to interact with chrome instance
  - [chrome-remote-interface](https://github.com/cyrus-and/chrome-remote-interface): CDP client with low level apis
  - [chromeless](https://github.com/graphcool/chromeless): provide high level apis built on CDP

## About This Repo

This repo demonstrates on

- how to launch chrome using **serverless-chrome/lambda**
- how to make chrome instance a singleton to optimize lambda function
- how to interact with chrome using **chrome-remote-interface** or **chromeless**

You can test the handlers locally or build it as a lambda package and try it on aws lambda. See scripts section in
[package.json](package.json) for more details.

Note: You need to install **chrome-launcher** as a dev dependency to enable serverless-chrome launching chrome in
non-lambda environment.

## License

MIT