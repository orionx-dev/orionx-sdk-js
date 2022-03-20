import gql from 'graphql-tag'

const throwParamsError = param => {
	throw new Error(`Missing ${param}, try with Orionx.placeLimitOrder({marketCode: ':marketCode', amount: :amount, limitPrice: :limitPrice, sell: :sell})
  Remember that the amount must be multiplied by 10^(currency units).
  `)
}

export default async function({ marketCode, amount, limitPrice, sell, clientId }) {
	if (!marketCode) throwParamsError('marketCode')
	if (!amount) throwParamsError('amount')
	if (!amount) throwParamsError('limitPrice')
	if (sell == null) throwParamsError('sell')

	const query = gql`
		mutation placeLimitOrder(
			$marketCode: ID
			$amount: BigInt
			$limitPrice: BigInt
			$sell: Boolean
			$clientId: String
		) {
			placeLimitOrder(
				marketCode: $marketCode
				amount: $amount
				limitPrice: $limitPrice
				sell: $sell
				clientId: $clientId
			) {
				_id
				type
				amount
				createdAt
				market {
					code
				}
				clientId
			}
		}
	`

	const response = await this.graphql({
		query,
		variables: { marketCode, amount, limitPrice, sell, clientId }
	})

	return response.placeLimitOrder
}
