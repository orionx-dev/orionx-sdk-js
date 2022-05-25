export default async function() {
  const query = `
    mutation {
      requestRealtimeToken
    }
  `
  const response = await this.graphql({
    query,
    variables: {}
  })

  return response.requestRealtimeToken
}
