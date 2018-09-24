import test from 'ava'
import Orionx from '../../src'
import setOrionxCredentials from '../../src/helpers/setOrionxCredentials'
import delay from '../../src/helpers/delay'

test.beforeEach(t => {
  setOrionxCredentials()
})

test.serial.before(async t => {
  await delay()
})

test('placeMarketOrder throws amountIsLow', async t => {
  try {
    await Orionx.placeMarketOrder({
      marketCode: 'XRPCLP',
      amount: 1,
      sell: true
    })
  } catch (err) {
    t.true(/\[amountIsLow\]/.test(err.message))
  }
})

test('placeMarketOrder throws marketCode missing', async t => {
  try {
    await Orionx.placeMarketOrder({
      amount: 1,
      sell: true
    })
  } catch (err) {
    t.true(/Missing marketCode/.test(err.message))
  }
})
test('placeMarketOrder throws amount missing', async t => {
  try {
    await Orionx.placeMarketOrder({
      marketCode: 'CHACLP',
      sell: true
    })
  } catch (err) {
    t.true(/Missing amount/.test(err.message))
  }
})
test('placeMarketOrder throws sell missing', async t => {
  try {
    await Orionx.placeMarketOrder({
      marketCode: 'CHACLP',
      amount: 1
    })
  } catch (err) {
    t.true(/Missing sell/.test(err.message))
  }
})
