import test from 'ava'
import Orionx from '../../src'
import setOrionxCredentials from '../../src/helpers/setOrionxCredentials'
import delay from '../../src/helpers/delay'

test.beforeEach(t => {
  setOrionxCredentials()
})

test('marketOrderBook throws marketCode missing', async t => {
  try {
    await Orionx.marketOrderBook({
      limit: 1
    })
  } catch (err) {
    t.true(/marketCode missing/.test(err.message))
  }
})

test('marketOrderBook throws limit missing', async t => {
  try {
    await Orionx.marketOrderBook({
      marketCode: 'XRPCLP'
    })
  } catch (err) {
    t.true(/limit missing/.test(err.message))
  }
})
test('marketOrderBook response are numbers', async t => {
  t.plan(4)
  const orderBook = await Orionx.marketOrderBook({
    marketCode: 'XRPCLP',
    limit: 1
  })
  t.true(typeof orderBook.sell[0].amount === 'number')
  t.true(typeof orderBook.buy[0].amount === 'number')
  t.true(typeof orderBook.spread === 'number')
  t.true(typeof orderBook.mid === 'number')
})

test.afterEach(async t => {
  await delay()
})
