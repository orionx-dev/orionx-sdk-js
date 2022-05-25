export default async function ({currencyCode}) {
  if (!currencyCode)
    throw new Error('Missing currencyCode, try Orionx.wallet({currencyCode: \'CLP\'})')

  const query = `
    query getWallet($currencyCode: ID!) {
      me {
        _id
        wallet(currencyCode: $currencyCode) {
          _id
          balance
          availableBalance
          currency {
            code
            name
            symbol
            format
          }
        }
      }
    }
  `
  const response = await this.graphql({query, variables: {currencyCode}})

  return response.me.wallet
}
