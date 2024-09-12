import Api from './api';
import { Me } from './types';

export default class User {
  public userId: string;
  private apiClient: Api;

  constructor(apiClient: Api) {
    this.apiClient = apiClient;
    this.userId = '';
  }

  public async getUserId(): Promise<string> {
    const query = `
      query sdk_getUserId {
        me {
          _id
        }
      }
    `;

    const response = await this.apiClient.call(query, {});
    return response.me?._id;
  }

  public async getMe(): Promise<Me> {
    const query = `
      query sdk_getMe {
        me {
          _id
          email
          name
          profile {
            fullName
            phone
            kycVerified
            birthdate
            countryCode
            occupation
            address
          }
        }
      }
    `;

    const response = await this.apiClient.call(query, {});
    return response.me;
  }
}
