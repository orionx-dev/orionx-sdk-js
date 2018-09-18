import test from 'ava'
import Orionx from '../src/index.js'

test('setCredentials', t => {
  Orionx.setCredentials({apiKey: 'apiKey', secretKey: 'secretKey', apiUri: 'apiUri'})
  t.is(
    JSON.stringify(Orionx.credentials),
    JSON.stringify({apiKey: 'apiKey', secretKey: 'secretKey', apiUri: 'apiUri'})
  )
})

test('setCredentials with default apiUri', t => {
  Orionx.setCredentials({apiKey: 'apiKey', secretKey: 'secretKey'})
  t.is(
    JSON.stringify(Orionx.credentials),
    JSON.stringify({
      apiKey: 'apiKey',
      secretKey: 'secretKey',
      apiUri: 'https://api2.orionx.io/graphql/'
    })
  )
})
