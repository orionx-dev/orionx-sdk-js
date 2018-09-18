import test from 'ava'
import Orionx from '../src/index.js'

const errorText = param =>
  `Missing ${param}, try with Orionx.setCredentials({apiKey: :apiKey, secretKey: :secretKey, apiUri: :apiUri}) method`

test('throws error without credentials', t => {
  delete Orionx.credentials
  const error = t.throws(() => {
    Orionx.checkCredentials()
  }, Error)

  t.is(error.message, errorText('credentials'))
})

test('throws error without apiKey', t => {
  Orionx.credentials = {apiKey: 'apiKey', secretKey: 'secretKey', apiUri: 'apiUri'}
  delete Orionx.credentials.apiKey
  const error = t.throws(() => {
    Orionx.checkCredentials()
  }, Error)
  t.is(error.message, errorText('apiKey'))
})

test('throws error without secretKey', t => {
  Orionx.credentials = {apiKey: 'apiKey', secretKey: 'secretKey', apiUri: 'apiUri'}
  delete Orionx.credentials.secretKey
  const error = t.throws(() => {
    Orionx.checkCredentials()
  }, Error)
  t.is(error.message, errorText('secretKey'))
})

test('throws error without apiUri', t => {
  Orionx.credentials = {apiKey: 'apiKey', secretKey: 'secretKey', apiUri: 'apiUri'}
  delete Orionx.credentials.apiUri
  const error = t.throws(() => {
    Orionx.checkCredentials()
  }, Error)
  t.is(error.message, errorText('apiUri'))
})
