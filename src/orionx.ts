import jsSHA from 'jssha';
import fetch, { Response, RequestInit } from 'node-fetch';

const typedFetch: (url: string, options: RequestInit) => Promise<Response> =
  fetch;

export class Orionx {
  private readonly apiKey: string;
  private readonly apiSecret: string;
  private readonly apiEndpoint: string;

  constructor(apiKey: string, apiSecret: string, apiEndpoint: string) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.apiEndpoint = apiEndpoint;
  }

  private generateSignature(
    secret: string,
    eventTimestamp: string,
    rawBody: any
  ): string {
    const shaObj = new jsSHA('SHA-512', 'TEXT', {
      hmacKey: { value: secret, format: 'TEXT' },
    });
    shaObj.update(eventTimestamp + rawBody);
    return shaObj.getHMAC('HEX');
  }

  public async apiCall(query: string, variables: any) {
    try {
      const timestamp = new Date().getTime() / 1000;
      const body = JSON.stringify({ query, variables });
      const signature = this.generateSignature(
        this.apiSecret,
        String(timestamp),
        body
      );
      const response: Response = await typedFetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'X-ORIONX-TIMESTAMP': String(timestamp),
          'X-ORIONX-APIKEY': this.apiKey,
          'X-ORIONX-SIGNATURE': signature,
          'Content-Type': 'application/json',
        },
        body,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  public async getMe() {
    const query = `
      query {
        me {
          email
          name
        }
      }
    `;

    const response = await this.apiCall(query, {});
    return response;
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

    const response = await this.apiCall(query, {
      marketCode: 'BTCCLP',
      amount: 10000,
      limitPrice: 100000000,
      sell: false,
    });
    return response;
  }
}
export default Orionx;
