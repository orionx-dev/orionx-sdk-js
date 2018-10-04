import gql from 'graphql-tag'

const throwParamsError = param => {
  throw new Error(`Missing ${param}, try with Orionx.placeMarketOrder({marketCode: ':marketCode', amount: :amount, sell: :sell})
  Remember that the amount must be multiplied by 10^(currency units).
  `)
}

export default async function({marketCode, amount, sell}) {
  if (!marketCode) throwParamsError('marketCode')
  if (!amount) throwParamsError('amount')
  if (sell == null) throwParamsError('sell')

  const query = gql`
    mutation placeMarketOrder($marketCode: ID, $amount: BigInt, $sell: Boolean) {
      placeMarketOrder(marketCode: $marketCode, amount: $amount, sell: $sell) {
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
    variables: {marketCode, amount, sell}
  })

  return response.placeMarketOrder
}
