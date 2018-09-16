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
      <img src="https://img.shields.io/npm/v/@orionx/orionx-sdk.svg" />
    </a>
    <a href='https://coveralls.io/github/orionx-dev/orionx-sdk-js?branch=master'>
      <img src='https://coveralls.io/repos/github/orionx-dev/orionx-sdk-js/badge.svg?branch=master' alt='Coverage Status' />     </a>
    <a href="https://travis-ci.org" alt="Travis CI">
      <img src="https://travis-ci.org/orionx-dev/orionx-sdk-js.svg?branch=master" alt="Travis Badge" />
    </a>
</p>

## Usage

First you need to install it via npm.

```
npm install orionx-sdk --save
```

## Code example

```js
import Orionx from 'orionx-sdk'

Orionx.setCredentials({
  apiKey: '<apiKey>',
  secretKey: '<secretKey>',
  apiUriL '<https://apiUri.com/graphql>'
})

Orionx.market({code: 'LTCBTC'})
      .then(function(market) {
        console.log(market)
      })
      .catch(function(err) {
        console.log(err)
      })
```

## Docs

For further information about, visit our [Docs](http://docs.orionx.com)

## Opening Issues

If you encounter a bug with the Orionx SDK for JavaScript we would like to hear about it. Search the [existing issues](https://github.com/orionx-dev/orionx-sdk-js/issues) and try to make sure your problem doesn’t already exist before opening a new issue. It’s helpful if you include the version of the SDK, Node.js and OS you’re using.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
