import test from 'ava'
import Orionx from '../../src'
import setOrionxCredentials from '../../src/helpers/setOrionxCredentials'

test.beforeEach(t => {
  setOrionxCredentials()
})

test('Create a payment', async t => {
  t.plan(3)
  const payment = await Orionx.createPayment({
    acceptedCurrenciesCodes: ['LTC', 'BTC'],
    amount: 1000,
    description: 'Testing...',
    mainCurrencyCode: 'CLP',
    title: 'Test'
  })
  t.true(!!payment)
  t.is(payment.mainCurrency.code, 'CLP')
  t.is(payment.status, 'waiting')
})
