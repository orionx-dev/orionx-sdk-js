import gql from 'graphql-tag'

export default async function() {
  const query = gql`
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
