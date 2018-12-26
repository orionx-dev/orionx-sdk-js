import gql from 'graphql-tag'

export default async function() {
  const query = gql`
    query {
      trades {
        _id
        page
        totalCount
        totalPages
        hasNextPage
        hasPreviousPage
        items {
          _id
          amount
          price
          totalCost
          date
          market {
            code
            name
            commission
            releaseDate
            isMaintenance
          }
        }
      }
    }
  `
  const response = await this.graphql({ query, variables: {} })
  return response.trades
}
