import test from 'ava'
import generateSignature from '../../../src/helpers/callOrionx/generateSignature'

test('Generate valid signature', t => {
	const body = JSON.stringify({
		foo: 'bar'
	})

	const timestamp = 'Thu Sep 13 2018 22:07:55 GMT-0300 (Chile Summer Time)'
	const secretKey =
		'd3acc90185d8317a8028418d45ae7af1ae38d2086eaa74ac641305eb06d'
	const signature = generateSignature({ body, timestamp, secretKey })

	t.is(
		signature,
		'0b811edbec95ebc9bdd8595edf1c2b941a9de3aeae15e0cbcdb8d33e5d2a1fcf9a895a235e18d4168604a980360608d4cd4faf6e843ed4e20e8c149ba348e69d'
	)
})
