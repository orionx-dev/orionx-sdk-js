export default param => {
  throw new Error(
    `Missing ${param}, try with Orionx.setCredentials({apiKey: :apiKey, secretKey: :secretKey, apiUri: :apiUri}) method`
  )
}
