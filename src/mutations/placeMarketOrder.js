const throwParamsError = param => {
  throw new Error(`Missing ${param}, try with Orionx.placeMarketOrder({marketCode: ':marketCode', amount: :amount, sell: :sell})
  Remember that the amount must be multiplied by 10^(currency units).
  `)
}

export default async function({marketCode, amount, sell, clientId}) {
  if (!marketCode) throwParamsError('marketCode')
  if (!amount) throwParamsError('amount')
  if (sell == null) throwParamsError('sell')

  const query = `
    mutation placeMarketOrder($marketCode: ID, $amount: BigInt, $sell: Boolean, $clientId: String) {
      placeMarketOrder(marketCode: $marketCode, amount: $amount, sell: $sell, clientId: $clientId) {
        _id
        type
        amount
        createdAt
        market {
          code
        }
      }
    }
  `

  const response = await this.graphql({
    query,
    variables: {marketCode, amount, sell, clientId}
  })

  return response.placeMarketOrder
}
