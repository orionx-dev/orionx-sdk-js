import Api from './api';

export default class User {
  public userId: string;
  private apiClient: Api;

  constructor(apiClient: Api) {
    this.apiClient = apiClient;
    this.userId = '';
  }

  public async getUserId(): Promise<any> {
    const query = `
      query sdk_getUserId {
        me {
          _id
        }
      }
    `;

    const response = await this.apiClient.call(query, {});
    return response;
  }

  public async getMe() {
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
    return response;
  }
}
