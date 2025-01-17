import Api from './api';
import { Account } from './types';

export default class Accounts {
  private apiClient: Api;

  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  /**
   * Queries
   */

  public async getAccount(assetId: string): Promise<Account> {
    const query = `
      query sdk_getAccount($assetId: ID!) {
        wallet(code: $assetId) {
          _id
          currency {
            code
            units
          }
          balance
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

    return response.wallet;
  }

  public async getAccounts(): Promise<Account[]> {
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

    return response.me.wallets;
  }
}
