import gql from 'graphql-tag'

// const errorText = param => `Missing ${param}, try with Orionx.createPayment({acceptedCurrenciesCodes: [], })`
export default async function(variables) {
  const {
    acceptedCurrenciesCodes,
    amount,
    callbackURL,
    description,
    mainCurrencyCode,
    returnURL,
    title
  } = variables

  // Validations
  if (!amount) {
  }
  const query = gql`
    mutation createPayment(
      $acceptedCurrenciesCodes: [ID]
      $amount: BigInt
      $callbackURL: String
      $description: String
      $mainCurrencyCode: ID
      $returnURL: String
      $title: String
    ) {
      createPayment(
        acceptedCurrenciesCodes: $acceptedCurrenciesCodes
        amount: $amount
        callbackURL: $callbackURL
        description: $description
        mainCurrencyCode: $mainCurrencyCode
        returnURL: $returnURL
        title: $title
      ) {
        _id
        amount
        description
        mainCurrency {
          code
          name
        }
        returnURL
        status
        title
      }
    }
  `
  const response = await this.graphql({
    query,
    variables: variables
  })

  return response.createPayment
}
