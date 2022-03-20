import test from 'ava'
import throwCredentialsError from '../src/throwCredentialsError'

test('Generate valid error msg', t => {
  const param = 'foo'
  const validMsg = `Missing ${param}, try with Orionx.setCredentials({apiKey: :apiKey, secretKey: :secretKey, apiUri: :apiUri}) method`

  const error = t.throws(() => {
    throwCredentialsError(param)
  })

  t.is(error.message, validMsg)
})
