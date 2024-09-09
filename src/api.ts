export default class Api {
  private readonly apiKey: string;
  private readonly apiSecret: string;
  private readonly apiEndpoint: string;
  private readonly callMock: (endpoint: string, body: any, headers: any) => any;
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

  public async apiCall(endpoint, body, headers): Promise<any> {
    const { default: fetch } = (await import('node-fetch')) as any;
    const response: Response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body,
    });

    const data = await response.json();

    if (response.status === 500) {
      throw new Error(data.message);
    }

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

      const apiFunction = this.callMock ?? this.apiCall;

      const response = await apiFunction(this.apiEndpoint, body, headers);

      if (response.errors) {
        if (
          response.errors[0].path &&
          response.errors.length !== Object.keys(response.data).length
        ) {
          return response.data;
        }
        throw new Error(response.errors[0].message);
      }

      return response.data;
    } catch (error: any) {
      console.error(error.message);
      throw new Error(error.message);
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
