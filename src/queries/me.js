export default async function () {
  const query = `
    query {
      me {
        _id
        name
        email
        createdAt
      }
    }
  `
  const response = await this.graphql({query, variables: {}})
  return response.me
}
