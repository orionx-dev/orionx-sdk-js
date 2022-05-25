export default async function({walletId, filter, page, limit, sortBy, sortType}) {
  const query = `
    query getTransactions(
      $walletId: ID
      $filter: String
      $page: Int
      $limit: Int
      $sortBy: String
      $sortType: SortType
    ) {
      transactions(
        walletId: $walletId
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
          balance
          commission
          date
          type
          adds
          hash
          description
          price
          explorerURL
          currency {
            code
            isCrypto
          }
          market {
            code
            name
          }
        }
      }
    }
  `
  const response = await this.graphql({
    query,
    variables: {walletId, filter, page, limit, sortBy, sortType}
  })
  return response.transactions
}
