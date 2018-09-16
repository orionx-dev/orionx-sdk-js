import gql from 'graphql-tag'

export default async function({code}) {
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
  return await this.graphql({query, variables: {code}})
}
