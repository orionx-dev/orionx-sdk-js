export default async function ({marketCode, limit}) {
  if (!marketCode)
    throw new Error(
      'marketCode missing, try with Orionx.marketOrderBook({marketCode: \'LTCBTC\', limit: 5})'
    )

  if (!limit)
    throw new Error(
      'limit missing, try with Orionx.marketOrderBook({marketCode: \'LTCBTC\', limit: 5})'
    )

  const query = `
    query marketOrderBook($marketCode: ID!, $limit: Int) {
      marketOrderBook(marketCode: $marketCode, limit: $limit) {
        sell {
          amount
          limitPrice
        }
        buy {
          amount
          limitPrice
        }
        spread
        mid
      }
    }
  `
  const response = await this.graphql({
    query,
    variables: {marketCode, limit}
  })
  return response.marketOrderBook
}
