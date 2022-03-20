import test from 'ava'
import Orionx from '../../src'

test('Throws error without marketCode', async t => {
  try {
    await Orionx.placeLimitOrder({
      amount: 1,
      limitPrice: 1,
      sell: false
    })
  } catch (err) {
    t.true(/Missing marketCode/.test(err.message))
  }
})

test('Throws error without amount', async t => {
  try {
    await Orionx.placeMarketOrder({
      marketCode: 'CHACLP',
      limitPrice: 1,
      sell: true
    })
  } catch (err) {
    t.true(/Missing amount/.test(err.message))
  }
})

test('Throws error without sell', async t => {
  try {
    await Orionx.placeMarketOrder({
      marketCode: 'CHACLP',
      limitPrice: 1,
      amount: 1
    })
  } catch (err) {
    t.true(/Missing sell/.test(err.message))
  }
})
