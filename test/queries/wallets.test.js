import test from 'ava'
import Orionx from '../../src/'
import setOrionxCredentials from '../../src/helpers/setOrionxCredentials'

test.beforeEach(t => {
	setOrionxCredentials()
})

test('Throws error when no wallets', async t => {
	const validMsg = 'Function not returning wallets'

	try {
		const wallets = await Orionx.wallets()
		t.true(wallets.length > 0)
	} catch (err) {
		t.is(err.message, validMsg)
	}
})
