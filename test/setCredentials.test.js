import test from 'ava'
import Orionx from '../src/'

test('Throws valid error without apiKey', t => {
	const param = 'apiKey'
	const validMsg = `Missing ${param}, try with Orionx.setCredentials({apiKey: :apiKey, secretKey: :secretKey, apiUri: :apiUri}) method`

	const error = t.throws(() => {
		Orionx.setCredentials({ secretKey: 'bar', apiUri: 'foo' })
	})

	t.is(error.message, validMsg)
})

test('Throws valid error without secretKey', t => {
	const param = 'secretKey'
	const validMsg = `Missing ${param}, try with Orionx.setCredentials({apiKey: :apiKey, secretKey: :secretKey, apiUri: :apiUri}) method`

	const error = t.throws(() => {
		Orionx.setCredentials({ apiKey: 'bar', apiUri: 'foo' })
	})

	t.is(error.message, validMsg)
})

test('Set credentials correctly', t => {
	t.plan(3)
	Orionx.setCredentials({ apiKey: 'bar', secretKey: 'boo', apiUri: 'foo' })
	const { apiKey, secretKey, apiUri } = Orionx.credentials
	t.is(apiKey, 'bar')
	t.is(secretKey, 'boo')
	t.is(apiUri, 'foo')
})
