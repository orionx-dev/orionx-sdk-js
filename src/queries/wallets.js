import gql from 'graphql-tag'

export default async function() {
	const query = gql`
		query {
			me {
				_id
				wallets {
					_id
					balance
					availableBalance
					currency {
						code
						name
						symbol
						format
						units
					}
				}
			}
		}
	`
	const response = await this.graphql({query, variables: {}})

	return response.me.wallets
}
