import test from 'ava'
import Orionx from '../../src/'

test('Throws error without valid code', async t => {
	const validMsg = 'code missing, try with Orionx.market({code: \'LTCBTC\'})'

	try {
		await Orionx.market({})
	} catch (err) {
		t.is(err.message, validMsg)
	}
})
