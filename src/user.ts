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
      query {
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
      query {
        me {
          _id
          email
          name
        }
      }
    `;

    const response = await this.apiClient.call(query, {});
    return response;
  }
}
