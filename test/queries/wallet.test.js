import test from 'ava'
import Orionx from '../../src/'

test('Throws error without valid currencyCode', async t => {
  const validMsg =
		'Missing currencyCode, try Orionx.wallet({currencyCode: \'CLP\'})'

  try {
    await Orionx.wallet({})
  } catch (err) {
    t.is(err.message, validMsg)
  }
})
