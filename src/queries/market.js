import gql from 'graphql-tag'

export default async function({code}) {
  if (!code) throw new Error(`code missing, try with Orionx.market({code: 'LTCBTC'})`)
  const query = gql`
    query getMarket($code: ID) {
      market(code: $code) {
        name
        code
        lastTrade {
          price
        }
        mainCurrency {
          code
          units
          format
          symbol
        }
        secondaryCurrency {
          code
          units
          format
          symbol
        }
      }
    }
  `
  const response = await this.graphql({query, variables: {code}})
  return response.market
}
