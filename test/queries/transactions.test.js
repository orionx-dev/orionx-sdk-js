import test from 'ava'
import Orionx from '../../src'
import setOrionxCredentials from '../../src/helpers/setOrionxCredentials'
import delay from '../../src/helpers/delay'

test.beforeEach(t => {
	setOrionxCredentials()
})

test('Transactions method returns transactions', async t => {
	t.plan(1)
	try {
		const wallets = await Orionx.wallets()

		const transactions = await Orionx.transactions({walletId: wallets[0]._id})

		t.true(transactions.items.length > 0)
	} catch (e) {
		t.fail(e.message)
	}
})

test.afterEach(async t => {
	await delay()
})
