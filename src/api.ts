export default class Api {
  private readonly apiKey: string;
  private readonly apiSecret: string;
  private readonly apiEndpoint: string;
  private readonly callMock: (
    endpoint: string,
    body: any,
    headers: any
  ) => Response;
  private readonly hasherMock: (
    secret: string,
    timestamp: any,
    payload: string
  ) => string;

  constructor(apiKey, apiSecret, apiEndpoint, callMock, hasherMock) {
    this.apiEndpoint = apiEndpoint;
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.callMock = callMock;
    this.hasherMock = hasherMock;
  }

  public async apiCall(endpoint, body, headers) {
    const { default: fetch } = (await import('node-fetch')) as any;

    const response: Response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body,
    });

    const data = await response.json();
    return data;
  }

  public async call(query: string, variables: any): Promise<any> {
    try {
      const timestamp = new Date().getTime() / 1000;
      const body = JSON.stringify({ query, variables });
      const signature = await this.generateSignature(
        this.apiSecret,
        String(timestamp),
        body
      );

      const headers = {
        'X-ORIONX-TIMESTAMP': String(timestamp),
        'X-ORIONX-APIKEY': this.apiKey,
        'X-ORIONX-SIGNATURE': signature,
        'Content-Type': 'application/json',
      };
      if (this.callMock) return this.callMock(this.apiEndpoint, body, headers);

      return this.apiCall(this.apiEndpoint, body, headers);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  private async generateSignature(
    secret: string,
    eventTimestamp: string,
    rawBody: any
  ): Promise<string> {
    if (this.hasherMock) {
      return this.hasherMock(secret, eventTimestamp, rawBody);
    }
    const crypto = await import('crypto');
    const hasher = crypto.createHmac('sha512', secret);
    hasher.update(eventTimestamp + rawBody);
    return hasher.digest('hex');
  }
}