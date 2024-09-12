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

## Code examples

### How to initialize SDK

```js
// App.ts
import { Orionx } from 'orionx-sdk';

const apiKey = 'your-api-key';
const secretKey = 'your-secret-key';

export const orionx = new Orionx(
  apiKey,
  secretKey,
  'https://api.orionx.com/graphql'
);
```

## Methods

### User:

This interface represents the structure of the `User` object, which contains details about the currently authenticated user, including their basic information and profile data.

```js
const me = await orionx.user.getMe();

// Example response:

{
  _id: 'userId',
  email: 'test_user@orionx.com',
  name: 'Test User',
  profile: {
    fullName: 'Test Orionx User',
    phone: '+569 88888888',
    kycVerified: true,
    birthdate: '01/30/2000',
    countryCode: 'CL',
    occupation: 'Developer',
    address: 'Independencia 2404'
  }
}
```

---

### Markets:

#### Obtain the OrderBook of a marketplace in Orionx

This method allows you to obtain the order book (`OrderBook`) for a specific market in Orionx. The order book includes both buy and sell orders, as well as a calculation of the spread and average price.

```js
const marketCode = "BTCCLP"; // Market code to be consulted
const resultLimit = 25; // Number of orders to obtain (optional). The default value is 50 if not specified.

const orderBook = await orionx.markets.getOrderBook(marketCode, resultLimit);

// Example response:

{
  "sell": [
    { "amount": 500000, "limitPrice": 70000000 },
    { "amount": 12000, "limitPrice": 69500000 }
  ],
  "buy": [
    { "amount": 30000, "limitPrice": 67000000 },
    { "amount": 8000, "limitPrice": 65000000 }
  ],
  "spread": 2500000,
  "mid": 67850000
}
```

#### Market Information

This interface represents the structure of a `Market` object, which contains details about a specific market, such as its code, name, and currency information, as well as the most recent trade.

```js
const marketCode = "USDTCLP"; // Market code to be consulted
const market = await orionx.markets.getMarket(marketCode);

// Example response:

{
  code: 'BTCCLP',
  name: 'BTC/CLP',
  mainCurrency: { code: 'BTC', name: 'Bitcoin', units: 8 },
  secondaryCurrency: { code: 'CLP', name: 'Pesos chilenos', units: 0 },
  lastTrade: { price: 70000000 }
}
```

---

### Accounts:

This interface represents the structure of an `Account` object, which provides details about a specific account, including balance information, currency, and available networks for transactions.

```js
const currencyCode = "BTC" // The code representing the currency (e.g., "BTC", "CLP").
const account = await orionx.accounts.getAccount(currencyCode);

// Example response:

{
  _id: 'accountId',
  currency: { code: 'ETH', units: 8 },
  balance: 100000, // 0.001 ETH
  availableBalance: 100000, // 0.001 ETH
  availableNetworks: [ { code: 'ETH' }, { code: 'ETHTN' } ],
  balanceUSD: 2.3,
  balanceCLP: 2000
}
```

Alternatively you can request the information of all the accounts associated to your user with the `getAccounts` method. This method returns an array of `Account` types.

```js
const accounts = await orionx.accounts.getAccounts();

// Example response:
[
  {
    _id: 'accountId',
    currency: { code: 'DAI', units: 8 },
    balance: 0,
    availableBalance: 0,
    availableNetworks: [ [Object] ],
    balanceUSD: 0,
    balanceCLP: 0
  },
  {
    _id: 'accountId',
    currency: { code: 'ETH', units: 8 },
    balance: 0,
    availableBalance: 0,
    availableNetworks: [ [Object], [Object] ],
    balanceUSD: 0,
    balanceCLP: 0
  },
  ... more accounts ...
]
```

---

### Orders:

#### Create new Limit Order

This interface represents the structure of a `PlaceLimitOrder` object, which contains details about a limit order placed on a market, including the order's type, amount, price, and status.

```js
const limitPrice = 72000000 // Order Limit Price
const market = 'BTCCLP' // Market code
const sell = true // Wether is sell or buy order
const amount = 10000 // Amount of the order
const order = await orionx.orders.placeLimitOrder(market, amount, limitPrice, sell)

// Example response:

{
  _id: 'orderId',
  type: 'limit',
  amount: 10000,
  limitPrice: 72000000,
  status: 'open',
  createdAt: 1726071616518,
  market: { code: 'BTCCLP' },
  clientId: null
}
```

#### Create new Market Order

This interface represents the structure of a `PlaceMarketOrder` object, which contains details about a limit order placed on a market, including the order's type, amount, and status.

```js
const market = 'ETHCLP' // Market code
const sell = false // Wether is sell or buy order
const amount = 10000 // Amount of the order
const order = await orionx.orders.placeMarketOrder(market, amount, limitPrice, sell)

// Example response:

{
  _id: 'orderId',
  type: 'market',
  amount: 10000,
  limitPrice: null,
  status: 'closed',
  createdAt: 1726068320271,
  market: { code: 'ETHCLP' },
  clientId: null
}
```

#### Create new Stop Limit Order

This interface represents the structure of a `StopLimitOrder` object, which contains details about a limit order placed on a market, including the order's type, amount, and status.

```js
const market = 'BTCCLP' // Market code
const triggerPriceUp = 72000000 // Upper price to trigger limit order
const triggerDownPrice = 65000000 // Lower price to trigger limit order
const amount = 15000 // Amount of the order
const limitPrice = 75000000 // Limit order price to be created when any of the trigger conditions are met
const sell = true // Wether is sell or buy order

const order = await orionx.orders.placeStopLimitOrder(market, triggerPriceUp, triggerDownPrice, amount, limitPrice, sell)

// Example response:

{
  _id: 'orderId',
  type: 'limit',
  amount: 15000,
  limitPrice: 75000000,
  status: 'stop',
  createdAt: 1726071893318,
  market: { code: 'BTCCLP' },
  clientId: null
}
```

#### Cancel an open order

This interface represents the structure of a `Canceled Order` object, which contains details about a canceled order, including the order's type.

```js
const orderId = "6789qwer"
const cancelOrder = await orionx.orders.cancelOrder(orderId)

// Example response:

{
  _id: 'orderId',
  type: 'limit',
  status: 'canceled',
  clientId: null
}
```

---

### Transactions

#### Send

This interface represents the structure of a `Send` object, which contains details about a send transaction, including the transaction's id, amount and date.

```js
const walletId = "2345yuiop" // You can get it with getAccount method
const network = "ETH"
const amount = 1000000
const contactId = "uuid-contact-id"
const transaction = await orionx.transactions.send(walletId, network, amount, contactId)

// Example response:

{
  _id: 'transactionId',
  type: 'send',
  amount: 1500000,
  price: null,
  hash: null,
  date: 1726072591707,
  market: null,
  meta: null
}
```

#### Get Transaction Details

This interface represents the structure of a `Transaction` object, which contains details about a transaction, including the transaction's type, amount, market and cost.

```js
const transactionId = "xzcvb6789"
const transaction = await orionx.transactions.getTransaction(transactionId)

// Example response:

{
  _id: 'transactionId',
  amount: 544746,
  balance: 500000000,
  commission: 0,
  currency: { code: 'CLP', units: 0 },
  date: 1722486341664,
  type: 'trade-out',
  adds: false,
  hash: null,
  description: null,
  market: {
    code: 'BTCCLP',
    mainCurrency: { code: 'BTC', units: 8 },
    secondaryCurrency: { code: 'CLP', units: 0 }
  },
  price: 68000000,
  cost: 797000,
  explorerURL: null,
  isInside: null,
  meta: null
}
```

Alternatively you can request the information of all the transactions associated to your user with the `getTransactions` method. This method returns an array of `Transaction` types.

```js
const transactions = await orionx.accounts.getTransactions();

// Example response:
[
    {
      amount: 49750,
      balance: 999500,
      commission: 250,
      currency: { "code": "BTC", "units": 8 },
      date: 1726065370624,
      type: 'trade-in',
      adds: true,
      hash: null,
      description: null,
      market: {
        "code": "BTCCLP",
        "mainCurrency": { "code": "BTC", "units": 8 },
        "secondaryCurrency": { "code": "CLP", "units": 0 }
      },
      price: null,
      cost: 49750,
      explorerURL: null,
      isInside: null,
      meta: null
    },
    {
      amount: 50000,
      balance: 999500,
      commission: 0,
      currency: { "code": "ETH", "units": 8 },
      date: 1726065374255,
      type: 'discount',
      adds: false,
      hash: null,
      description: null,
      market: {
        "code": "ETHCLP",
        "mainCurrency": { "code": "ETH", "units": 8 },
        "secondaryCurrency": { "code": "CLP", "units": 0 }
      },
      price: null,
      cost: null,
      explorerURL: null,
      isInside: null,
      meta: null
    },
  ... more transactions ...
]
```
