<p align="center">
  <a href="https://orionx.com/">
    <img alt="babel" src="https://orionx.com/logo.svg" width="546">
  </a>
</p>

<h3 align="center">The official Orionx SDK for JavaScript</h3>

---

<p align="center">
    <a href="#backers" alt="Proyect MIT License">
        <img src="https://img.shields.io/github/license/mashape/apistatus.svg" />
    </a>
    <a href="#version" alt="NPM Version">
      <img src="https://img.shields.io/npm/v/orionx-sdk.svg" />
    </a>
    <a href="https://circleci.com" alt="Circle CI">
      <img src="https://circleci.com/gh/orionx-dev/orionx-sdk-js.svg?style=shield" alt="Circle CI Status Badge" />
    </a>
</p>

## Usage

First you need to install it via npm.

```
npm install orionx-sdk --save
```

Then you will need to get your credentials, follow [this tutorial](http://docs.orionx.com/docs/getStarted.html)

After that we are ready to go

## Code example

```js
// App.js
import Orionx from 'orionx-sdk'

Orionx.setCredentials({
  apiKey: '<apiKey>',
  secretKey: '<secretKey>',
  apiUri: 'https://api2.orionx.com/graphql',
})

// And then use this in any Component.js
Orionx.market({code: 'LTCBTC'})
  .then(function (market) {
    console.log(market)
  })
  .catch(function (err) {
    console.log(err)
  })
```

## Documentation & Examples

All documentation is [over here](http://docs.orionx.com/docs/sdk-javascript/)
