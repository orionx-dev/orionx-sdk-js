import Api from './api';
import User from './user';
import Orders from './orders';
import { Response } from 'node-fetch';

export class Orionx {
  private readonly apiKey: string;
  private readonly apiSecret: string;
  private readonly apiEndpoint: string;
  private apiClient: Api;
  public user: User;
  public orders: Orders;

  constructor(
    apiKey: string,
    apiSecret: string,
    apiEndpoint: string,
    callMock?: (endpoint: string, body: any, headers: any) => Response,
    hasherMock?: (secret: string, timestamp: any, payload: string) => string
  ) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.apiEndpoint = apiEndpoint;
    this.apiClient = new Api(
      apiKey,
      apiSecret,
      apiEndpoint,
      callMock,
      hasherMock
    );
    this.user = new User(this.apiClient);
    this.orders = new Orders(this.apiClient);
  }
}
export default Orionx;
