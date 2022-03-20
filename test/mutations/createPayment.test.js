import test from 'ava'
import Orionx from '../../src'

const params = {
  acceptedCurrenciesCodes: ['LTC', 'BTC'],
  amount: 1000,
  description: 'Testing...',
  mainCurrencyCode: 'CLP',
  title: 'Test'
}

const getErrorMsg = param =>
  `Missing ${param}, try with Orionx.createPayment({acceptedCurrenciesCodes: ["BTC", "ETH"], amount: 1500, mainCurrencyCode "CLP", title: "test payment"}) method`

test('Throws error without acceptedCurrenciesCodes', async t => {
  try {
    await Orionx.createPayment({ ...params, acceptedCurrenciesCodes: null })
  } catch (err) {
    t.is(err.message, getErrorMsg('acceptedCurrenciesCodes'))
  }
})

test('Throws error without amount', async t => {
  try {
    await Orionx.createPayment({ ...params, amount: null })
  } catch (err) {
    t.is(err.message, getErrorMsg('amount'))
  }
})

test('Throws error without mainCurrencyCode', async t => {
  try {
    await Orionx.createPayment({ ...params, mainCurrencyCode: null })
  } catch (err) {
    t.is(err.message, getErrorMsg('mainCurrencyCode'))
  }
})

test('Throws error without title', async t => {
  try {
    await Orionx.createPayment({ ...params, title: null })
  } catch (err) {
    t.is(err.message, getErrorMsg('title'))
  }
})
