import test from 'ava'
import Orionx from '../src/'
import setOrionxCredentials from '../src/helpers/setOrionxCredentials'

test.before(() => {
  setOrionxCredentials()
})

test('Query wallet', async t => {
  const wallet = await Orionx.wallet({ currencyCode: 'BTC' })

  t.is(wallet.currency.code, 'BTC')
})

test('Query wallets', async t => {
  const wallets = await Orionx.wallets()
  t.true(Array.isArray(wallets))
})

test('Query me', async t => {
  const me = await Orionx.me()
  t.true(me.email.includes('@'))
})

test('Query markets', async t => {
  const markets = await Orionx.markets()
  t.true(Array.isArray(markets))
})

test('Query market', async t => {
  const marketCode = 'BTCCLP'
  const market = await Orionx.market({ code: marketCode })
  t.is(market.code, marketCode)
})

test('Query marketOrderBook', async t => {
  t.plan(2)
  const marketCode = 'BTCCLP'
  const marketOrderBook = await Orionx.marketOrderBook({ marketCode, limit: 2 })
  t.true(Array.isArray(marketOrderBook.sell))
  t.true(Array.isArray(marketOrderBook.buy))
})

// Mising tests for Mutations
