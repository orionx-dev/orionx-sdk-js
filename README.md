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
	apiUri: '<https://apiUri.com/graphql>'
})

// And then use this in any Component.js
Orionx.market({ code: 'LTCBTC' })
	.then(function(market) {
		console.log(market)
	})
	.catch(function(err) {
		console.log(err)
	})
```

## Methods

### cancelOrder

Cancel an order by id.

```js
await Orionx.cancelOrder({ orderId: 'asd73jksslksdf' })
```

#### Params

**orderId:** Id of the order

---

### createPayment

The `createPayment()` creates a new payment and returns its data.

```js
await Orionx.createPayment({
	acceptedCurrenciesCodes: ['LTC', 'BTC'],
	amount: 1000,
	description: 'Testing...',
	mainCurrencyCode: 'CLP',
	title: 'Test'
})
```

#### Params

**acceptedCurrenciesCodes:** The coin codes that the buyer will be able to use as payment

**amount** The price in mainCurrencyCode units

**description** Some descriptive text

**mainCurrencyCode** The coin that you will recieve

**title** Some descriptive title

---

### me

The `me()` method returns yours user data.

```js
await Orionx.me()
```

---

### market

The `market()` method returns the info of a specified market.

```js
await Orionx.market({ code: ':marketCode' })
```

#### Params

**code:** Market code

---

### markets

The `markets()` method returns the info of all the markets.

```js
await Orionx.markets()
```

---

### placeLimitOrder

The `placeLimitOrder()` creates and returns a limit order .

```js
await Orionx.placeLimitOrder({marketCode: ':marketCode', amount: :amount, limitPrice: :limitPrice, sell: :sell})
```

#### Params

**marketCode:** Market code

**amount** The amount to be bought or sold, this amount must be multiplied by 10 ^ (unit amount)
For example BTC units = 8 so to sell 1 BTC amount should be 1 \* 10⁸.

**limitPrice** The price for the order

**sell** Boolean that defines if you buy or sell

---

### placeMarketOrder

The `placeMarketOrder()` creates and returns a market order .

```js
await Orionx.placeMarketOrder({marketCode: ':marketCode', amount: :amount, sell: :sell})
```

#### Params

**marketCode:** Market code

**amount** The amount to be bought or sold, this amount must be multiplied by 10 ^ (unit amount)
For example BTC units = 8 so to sell 1 BTC amount should be 1 \* 10⁸.

**sell** Boolean that defines if you buy or sell

---

## Docs

For further information about, visit our [Docs](http://docs.orionx.com/docs/getStarted/)

## Opening Issues

If you encounter a bug with the Orionx SDK for JavaScript we would like to hear about it. Search the [existing issues](https://github.com/orionx-dev/orionx-sdk-js/issues) and try to make sure your problem doesn’t already exist before opening a new issue. It’s helpful if you include the version of the SDK, Node.js and OS you’re using.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
