import gql from 'graphql-tag'

export default async function() {
  const query = gql`
    query {
      markets {
        code
        name
        mainCurrency {
          code
          name
          units
        }
        secondaryCurrency {
          code
          name
          units
        }
      }
    }
  `
  const response = await this.graphql({query, variables: {}})
  return response.markets
}
