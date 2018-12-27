import gql from 'graphql-tag'

const throwParamsError = param => {
	throw new Error(`Missing ${param}, try with Orionx.placeLimitOrder({marketCode: ':marketCode', amount: :amount, limitPrice: :limitPrice, sell: :sell})
  Remember that the amount must be multiplied by 10^(currency units).
  `)
}

export default async function({ marketCode, amount, limitPrice, sell }) {
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
		) {
			placeLimitOrder(
				marketCode: $marketCode
				amount: $amount
				limitPrice: $limitPrice
				sell: $sell
			) {
				_id
				type
				amount
				createdAt
				market {
					code
				}
			}
		}
	`

	const response = await this.graphql({
		query,
		variables: { marketCode, amount, limitPrice, sell }
	})

	return response.placeLimitOrder
}
