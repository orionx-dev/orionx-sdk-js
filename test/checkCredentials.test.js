import test from 'ava'
import Orionx from '../src/'

test('Throws valid error without credentials', t => {
	Orionx.credentials = null
	const param = 'credentials'
	const validMsg = `Missing ${param}, try with Orionx.setCredentials({apiKey: :apiKey, secretKey: :secretKey, apiUri: :apiUri}) method`

	const error = t.throws(() => {
		Orionx.checkCredentials()
	})

	t.is(error.message, validMsg)
})
test('Throws valid error without apiKey', t => {
	const param = 'apiKey'
	const validMsg = `Missing ${param}, try with Orionx.setCredentials({apiKey: :apiKey, secretKey: :secretKey, apiUri: :apiUri}) method`
	Orionx.credentials = { secretKey: 'bar', apiUri: 'foo' }

	const error = t.throws(() => {
		Orionx.checkCredentials()
	})

	t.is(error.message, validMsg)
})

test('Throws valid error without secretKey', t => {
	const param = 'secretKey'
	const validMsg = `Missing ${param}, try with Orionx.setCredentials({apiKey: :apiKey, secretKey: :secretKey, apiUri: :apiUri}) method`
	Orionx.credentials = { apiKey: 'bar', apiUri: 'foo' }

	const error = t.throws(() => {
		Orionx.checkCredentials()
	})

	t.is(error.message, validMsg)
})

test('Throws valid error without apiUri', t => {
	const param = 'apiUri'
	const validMsg = `Missing ${param}, try with Orionx.setCredentials({apiKey: :apiKey, secretKey: :secretKey, apiUri: :apiUri}) method`
	Orionx.credentials = { apiKey: 'bar', secretKey: 'foo' }

	const error = t.throws(() => {
		Orionx.checkCredentials()
	})

	t.is(error.message, validMsg)
})
