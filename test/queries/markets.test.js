import test from 'ava'
import Orionx from '../../src'
import setOrionxCredentials from '../../src/helpers/setOrionxCredentials'
import delay from '../../src/helpers/delay'

test.beforeEach(t => {
  setOrionxCredentials()
})

test('Markets method returns markets', async t => {
  t.plan(2)
  try {
    const markets = await Orionx.markets()

    t.true(markets.length > 0)
    t.true(markets.filter(market => market.code === 'LTCBTC').length === 1)
  } catch (e) {
    t.fail(e.message)
  }
})

test.afterEach(async t => {
  await delay()
})
