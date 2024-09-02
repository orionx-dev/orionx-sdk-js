<p align="center">
  <a href="https://orionx.com/">
    <img alt="Orionx" src="https://app.orionx.com/new-isologo.svg" width="546">
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
// App.ts
import { Orionx } from 'orionx-sdk';

const apiKey = 'your-api-key';
const secretKey = 'your-secret-key';

const orionx = new Orionx(
  apiKey,
  secretKey,
  'https://api.orionx.com/graphql',
});

// And then anywhere in your code
const market = await orionx.markets.getMarket('LTCBTC')

console.log(market)
```
