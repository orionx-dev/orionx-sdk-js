import Api from './api';
import User from './user';

export class Orionx {
  private readonly apiKey: string;
  private readonly apiSecret: string;
  private readonly apiEndpoint: string;

  constructor(apiKey: string, apiSecret: string, apiEndpoint: string) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.apiEndpoint = apiEndpoint;
    this.apiClient = new Api(apiKey, apiSecret, apiEndpoint);
    this.user = new User(this.apiClient);
  }

  public async placeLimitOrder() {
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
          createdAt
          market {
            code
          }
          clientId
        }
      }
    `;

    const response = await this.apiClient.apiCall(query, {
      marketCode: 'BTCCLP',
      amount: 10000,
      limitPrice: 100000000,
      sell: false,
    });
    return response;
  }
}
export default Orionx;
