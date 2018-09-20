import test from 'ava'
// TODO: replace this
// import generateSignature from 'App/helpers/callOrionx/generateSignature'
import generateSignature from '../../../src/helpers/callOrionx/generateSignature'

test('generate valid signature', t => {
  const body = `{
    foo: 'bar'
  }`
  const timestamp = '2018-09-14T01:07:55.348Z'
  const secretKey = 'd3acc90185d8317a8028418d45ae7af1ae38d2086eaa74ac641305eb06d'
  const signature = generateSignature({body, timestamp, secretKey})
  t.is(
    signature,
    '6627128cecb27cb2e44445d456b8f6540d0c6771f77a916b1980c3e997242fa3e26ee8b5427827e55c45069657b613bb22837cb2ce68f19907727452859381ac'
  )
})
