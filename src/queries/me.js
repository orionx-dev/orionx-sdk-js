import gql from 'graphql-tag'

export default async function() {
  const schema = gql`
    {
      me {
        _id
        name
        email
        createdAt
        wallets {
          _id
          balance
          availableBalance
          unconfirmedBalance
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

  return await this.query({schema, variables: {}})
}
