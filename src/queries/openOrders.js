import gql from 'graphql-tag'

export default async function({marketCode, limit}) {
  if (!marketCode)
    throw new Error("Missing marketCode, try Orionx.openOrders({marketCode: 'BTCCLP'})")

  if (!limit) limit = 15

  const query = gql`
    query orders($marketCode: ID, $limit: Int) {
      orders(marketCode: $marketCode, limit: $limit, onlyOpen: true) {
        _id
        items {
          _id
          type
          amount
          amountToHold
          secondaryAmount
          limitPrice
          filled
          secondaryFilled
          sell
          createdAt
          closedAt
          activatedAt
          status
          isStop
          stopPriceUp
          stopPriceDown
        }
      }
    }
  `

  const response = await this.graphql({query, variables: {marketCode, limit}})

  return response.orders.items
}
