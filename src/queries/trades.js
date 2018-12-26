import gql from 'graphql-tag'

export default async function({ filter, page, limit, sortBy, sortType }) {
  const query = gql`
    query getTrades(
      $filter: String
      $page: Int
      $limit: Int
      $sortBy: String
      $sortType: SortType
    ) {
      trades(
        filter: $filter
        page: $page
        limit: $limit
        sortBy: $sortBy
        sortType: $sortType
      ) {
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
  const response = await this.graphql({
    query,
    variables: { filter, page, limit, sortBy, sortType }
  })
  return response.trades
}
