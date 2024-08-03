import Api from './api';
import { GetTransactionsParameters } from './types';

export default class Transactions {
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

  /**
   * Mutations
   */

  public async send(
    fromWalletId: string,
    contactId?: string,
    network: string,
    amount: number,
    description?: string,
    clientId?: string
  ) {
    const query = `
      mutation sdk_send(
        $fromWalletId: ID
        $contactId: ID
        $network: String
        $amount: BigInt
        $description: String
        $clientId: ID
      ) {
        sendCrypto(
          fromWalletId: $fromWalletId
          contactId: $contactId
          network: $network
          amount: $amount
          description: $description
          clientId: $clientId
        ) {
          _id
          type
          amount
          limitPrice
          status
          createdAt
          market {
            code
          }
          clientId
        }
      }
    `;

    const response = await this.apiClient.call(query, {
      marketCode,
      amount,
      limitPrice,
      sell,
      clientId,
    });

    return response;
  }

  public async convert(
    quoteOptionId: string,
    amount: number,
    marketCode: string,
    sell: boolean
  ) {
    const query = `
      mutation sdk_convert(
        $quoteOptionId: ID
        $amount: BigInt
        $marketCode: ID
        $sell: Boolean
      ) {
        instantTransaction(
          quoteOptionId: $quoteOptionId
          amount: $amount
          marketCode: $marketCode
          sell: $sell
        )
      }
    `;

    const response = await this.apiClient.call(query, {
      quoteOptionId,
      amount,
      marketCode,
      sell,
    });
  }
}