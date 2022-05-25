export default async function () {
  const query = `
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
