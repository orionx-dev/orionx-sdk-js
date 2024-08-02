import Api from './api';

export default class Orders {
  private apiClient: Api;

  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  public async placeLimitOrder(
    marketCode: string,
    amount: number,
    limitPrice: number,
    sell: boolean,
    clientId?: string
  ) {
    const query = `
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
          limitPrice
          status
          createdAt
          market {
            code
          }
          clientId
        }
      }
    `;

    const response = await this.apiClient.call(query, {
      marketCode,
      amount,
      limitPrice,
      sell,
      clientId,
    });
    return response;
  }
}
