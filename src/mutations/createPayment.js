const throwError = param => {
  throw new Error(
    `Missing ${param}, try with Orionx.createPayment({acceptedCurrenciesCodes: ["BTC", "ETH"], amount: 1500, mainCurrencyCode "CLP", title: "test payment"}) method`
  )
}

export default async function(variables) {
  if (!variables.acceptedCurrenciesCodes) throwError('acceptedCurrenciesCodes')
  if (!variables.amount) throwError('amount')
  if (!variables.mainCurrencyCode) throwError('mainCurrencyCode')
  if (!variables.title) throwError('title')

  const query = `
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
