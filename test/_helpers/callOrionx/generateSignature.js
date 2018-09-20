import test from 'ava'
// TODO: replace this
// import generateSignature from 'App/helpers/callOrionx/generateSignature'
import generateSignature from '../../../src/helpers/callOrionx/generateSignature'

test('generate valid signature', t => {
  const body = `{
    foo: 'bar'
  }`
  const timestamp = 'Thu Sep 13 2018 22:07:55 GMT-0300 (Chile Summer Time)'
  const secretKey = 'd3acc90185d8317a8028418d45ae7af1ae38d2086eaa74ac641305eb06d'
  const signature = generateSignature({body, timestamp, secretKey})
  t.is(
    signature,
    '27750cb21da04e7db89e0bb169e2f1caeca0b4e09c90cbde9022e00fe6228429b149f1cd091cb5cd6764747f6cc64ad0ccfb74e238fa30632e3020f8e1bd4e9a'
  )
})
