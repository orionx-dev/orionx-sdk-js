import Api from './api';
import { Market, MarketCodes, OrderBook } from './types';

export default class Markets {
  private apiClient: Api;

  constructor(apiClient: Api) {
    this.apiClient = apiClient;
  }

  /**
   * Queries
   */

  public async getMarket(code: MarketCodes): Promise<Market> {
    const query = `
      query sdk_market($code: ID) {
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

    return response.market;
  }

  public async getMarkets(): Promise<Market[]> {
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
    return response.markets;
  }

  public async getOrderbook(
    marketCode: MarketCodes,
    limit = 50
  ): Promise<OrderBook> {
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

    return response.marketOrderBook;
  }
}
