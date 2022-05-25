const throwError = param => {
  throw new Error(
    `Missing ${param}, try with Orionx.cancelOrder({orderId: ":orderId"})`
  )
}

export default async function(variables) {
  if (!variables.orderId) throwError('orderId')

  const query = `
		mutation cancelOrder($orderId: ID) {
			cancelOrder(orderId: $orderId) {
				_id
				type
				status
			}
		}
	`
  const response = await this.graphql({
    query,
    variables: variables
  })

  return response.cancelOrder
}
