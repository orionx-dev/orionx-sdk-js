import Api from './api';

export default class User {
  public userId: string;

  constructor(apiClient: Api) {
    this.apiClient = apiClient;
    this.getUserId().then(response => {
      this.userId = response.data.me._id;
    });
  }

  public async getUserId() {
    const query = `
      query {
        me {
          _id
        }
      }
    `;

    const response = await this.apiClient.apiCall(query, {});
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

    const response = await this.apiClient.apiCall(query, {});
    return response;
  }
}
