import gql from 'graphql-tag'

export default async function() {
	const query = gql`
		query {
			me {
				_id
				name
				email
				createdAt
			}
		}
	`
	const response = await this.graphql({ query, variables: {} })
	return response.me
}
