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
      query sdk_getTransaction($_id: ID!) {
        transaction(_id: $_id) {
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
      _id: transactionId,
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
    network: string,
    amount: number,
    contactId?: string,
    description?: string,
    clientId?: string
  ) {
    const query = `
      mutation sdk_send(
        $fromWalletId: ID!
        $contactId: ID
        $network: String!
        $amount: BigInt!
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
          price
          hash
          date
          market {
            code
          }
          meta { 
            status
          }
        }
      }
    `;

    const response = await this.apiClient.call(query, {
      fromWalletId,
      contactId,
      network,
      amount,
      description,
      clientId,
    });

    return response;
  }

  public async withdrawalRequest(
    walletId: string,
    accountId: string,
    amount: number
  ) {
    const query = `
      mutation sdk_withdrawalRequest(
        $walletId: ID
        $accountId: ID
        $amount: BigInt
      ) {
        requestWithdrawal(
          walletId: $walletId
          accountId: $accountId
          amount: $amount
        ) {
          _id
          amount
          commission
          date
          type
          description
        }
      }
    `;

    const response = await this.apiClient.call(query, {
      walletId,
      accountId,
      amount,
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
        $quoteOptionId: String
        $amount: BigInt!
        $marketCode: ID!
        $sell: Boolean!
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
