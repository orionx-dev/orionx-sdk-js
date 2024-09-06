import Api from './api';

export default class Accounts {
  private apiClient: Api;

  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  /**
   * Queries
   */

  public async getAccount(assetId: string) {
    const query = `
      query sdk_getAccount($assetId: ID!) {
        wallet(code: $assetId) {
          _id
          currency {
            code
            units
          }
          balance
          availableBalance
          availableNetworks {
            code
          }
          balanceUSD
          balanceCLP
        }
      }
    `;

    const response = await this.apiClient.call(query, {
      assetId,
    });

    return response;
  }

  public async getAccounts() {
    const query = `
      query sdk_getAccounts {
        me {
          wallets {
             _id
            currency {
              code
              units
            }
            balance
            availableBalance
            availableNetworks {
              code
            }
            balanceUSD
            balanceCLP
          }
        }
      }
    `;

    const response = await this.apiClient.call(query, {});

    return response;
  }
}
