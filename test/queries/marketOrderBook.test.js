import test from 'ava'
import Orionx from '../../src/'

test('Throws error without valid orderbook limit', async t => {
  const validMsg =
		'limit missing, try with Orionx.marketOrderBook({marketCode: \'LTCBTC\', limit: 5})'
  try {
    await Orionx.marketOrderBook({ marketCode: 'BTCCLP' })
  } catch (err) {
    t.is(err.message, validMsg)
  }
})

test('Throws error without valid code', async t => {
  const validMsg =
		'marketCode missing, try with Orionx.marketOrderBook({marketCode: \'LTCBTC\', limit: 5})'

  try {
    await Orionx.marketOrderBook({ limit: 5 })
  } catch (err) {
    t.is(err.message, validMsg)
  }
})
