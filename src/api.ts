import fetch, { Response, RequestInit } from 'node-fetch';
import jsSHA from 'jssha';

const typedFetch: (url: string, options: RequestInit) => Promise<Response> =
  fetch;

export default class Api {
  private readonly apiKey: string;
  private readonly apiSecret: string;
  private readonly apiEndpoint: string;

  constructor(apiKey, apiSecret, apiEndpoint) {
    this.apiEndpoint = apiEndpoint;
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
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
}
