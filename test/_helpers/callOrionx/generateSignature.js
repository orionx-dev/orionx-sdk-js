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
    '464df5d7428f00883cd870362e67b0de723c4b4ed527fabb9132273e4f1636c67d21c82c4c50260f822398283dcf05dfa42d257e29f35be4a4c6819d0ae61308'
  )
})
