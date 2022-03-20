import test from 'ava'
import Orionx from '../../src'

const getErrorMsg = param =>
  `Missing ${param}, try with Orionx.cancelOrder({orderId: ":orderId"})`

test('Throws error without orderId', async t => {
  try {
    await Orionx.cancelOrder({})
  } catch (err) {
    t.is(err.message, getErrorMsg('orderId'))
  }
})
