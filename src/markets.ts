import Api from './api';

export default class Markets {
  private apiClient: Api;

  constructor(apiClient: Api) {
    this.apiClient = apiClient;
  }

  /**
   * Queries
   */

  public async getMarket(code: string) {
    const query = `
      query sdk_market($code: String!) {
        market(code: $code) {
          code
          name
          mainCurrency {
            code
            name
            units
          }
          secondaryCurrency {
            code
            name
            units
          }
          lastTrade {
            price
          }
        }
      }
    `;

    const response = await this.apiClient.call(query, {
      code,
    });

    return response;
  }

  public async getMarkets() {
    const query = `
      query sdk_markets {
        markets {
          code
          name
          mainCurrency {
            code
            name
            units
          }
          secondaryCurrency {
            code
            name
            units
          }
        }
      }
    `;

    const response = await this.apiClient.call(query, {});
    return response;
  }

  public async getOrderbook(marketCode: string, limit = 50) {
    const query = `
      query sdk_marketOrderBook($marketCode: ID!, $limit: Int) {
        marketOrderBook(marketCode: $marketCode, limit: $limit) {
          sell {
            amount
            limitPrice
          }
          buy {
            amount
            limitPrice
          }
          spread
          mid
        }
      }
    `;
    const response = await this.apiClient.call(query, {
      marketCode,
      limit,
    });

    return response;
  }
}