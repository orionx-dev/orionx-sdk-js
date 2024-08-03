import Api from './api';
import { GetTransactionsParameters } from './types';

export default class Orders {
  private apiClient: Api;

  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  /**
   * Queries
   */

  public async getTransaction(transactionId: string) {
    const query = `
      query sdk_getTransaction($transaction: ID!) {
        transaction(transactionId: $transactionId) {
          _id
          amount
          balance
          commission
          currency {
            code
            units
          }
          date
          type
          adds
          hash
          description
          market {
            code
            mainCurrency {
              code
              units
            }
            secondaryCurrency {
              code
              units
            }
          }
          price
          cost
          explorerURL
          isInside
          meta {
            status
          }
        }
      }
    `;

    const response = await this.apiClient.call(query, {
      transactionId,
    });

    return response;
  }

  public async getTransactions(parameters: GetTransactionsParameters) {
    const query = `
      query sdk_getTransactions($filter: String, $walletId: String, $types: [String], $initPeriod: Date, $finalPeriod: Date, $page: Int, $limit: Int, $sortBy: String, $sortType: String) {
        transactions(filter: $filter, walletId: $walletId, types: $types, initPeriod: $initPeriod, finalPeriod: $finalPeriod, page: $page, limit: $limit, sortBy: $sortBy, sortType: $sortType) {
          _id
          amount
          balance
          commission
          currency {
            code
            units
          }
          date
          type
          adds
          hash
          description
          market {
            code
            mainCurrency {
              code
              units
            }
            secondaryCurrency {
              code
              units
            }
          }
          price
          cost
          explorerURL
          isInside
          meta {
            status
          }
        }
      }
    `;

    const response = await this.apiClient.call(query, parameters);

    return response;
  }
}
