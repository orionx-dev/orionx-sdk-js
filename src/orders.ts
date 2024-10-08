import Api from './api';
import {
  CancelOrder,
  GetOrdersParameters,
  Order,
  PlaceLimitOrder,
  PlaceMarketOrder,
  PlaceStopLimitOrder,
  PlaceStopMarketOrder,
} from './types';

export default class Orders {
  private apiClient: Api;

  constructor(apiClient: Api) {
    this.apiClient = apiClient;
  }

  /**
   * Queries
   */

  public async getOrder(orderId: string): Promise<Order & { _id: string }> {
    const query = `
      query sdk_getOrder($orderId: ID!) {
        order(orderId: $orderId) {
          _id
          type
          amount
          limitPrice
          stopPriceDown
          stopPriceUp
          status
          createdAt
          activatedAt
          closedAt
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
          clientId
        }
      }
    `;

    const response = await this.apiClient.call(query, {
      orderId,
    });

    return response.order;
  }

  public async getOrders(
    parameters: GetOrdersParameters
  ): Promise<{ _id: string; items: Order[] }> {
    const query = `
      query sdk_getOrders($filter: String, $marketCode: ID, $onlyOpen: Boolean, $onlyClosed: Boolean, $currencyCode: ID, $onlyFilled: Boolean, $page: Int, $limit: Int, $sortBy: String, $sortType: SortType) {
        orders(filter: $filter, marketCode: $marketCode, onlyOpen: $onlyOpen, onlyClosed: $onlyClosed, currencyCode: $currencyCode, onlyFilled: $onlyFilled, page: $page, limit: $limit, sortBy: $sortBy, sortType: $sortType) {
          _id
          items {
            type
            amount
            limitPrice
            stopPriceUp
            stopPriceDown
            status
            createdAt
            activatedAt
            closedAt
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
            clientId
          }
        }
      }
    `;

    const response = await this.apiClient.call(query, parameters);

    return response.orders;
  }

  /**
   * Mutations
   */
  public async placeLimitOrder(
    marketCode: string,
    amount: number,
    limitPrice: number,
    sell: boolean,
    clientId?: string
  ): Promise<PlaceLimitOrder> {
    const query = `
      mutation sdk_placeLimitOrder(
        $marketCode: ID
        $amount: BigInt
        $limitPrice: BigInt
        $sell: Boolean
        $clientId: String
      ) {
        placeLimitOrder(
          marketCode: $marketCode
          amount: $amount
          limitPrice: $limitPrice
          sell: $sell
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

    return response.placeLimitOrder;
  }

  public async placeMarketOrder(
    marketCode: string,
    amount: number,
    sell: boolean,
    clientId?: string
  ): Promise<PlaceMarketOrder> {
    const query = `
      mutation sdk_placeMarketOrder(
        $marketCode: ID
        $amount: BigInt
        $sell: Boolean
        $clientId: String
      ) {
        placeMarketOrder(
          marketCode: $marketCode
          amount: $amount
          sell: $sell
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
      sell,
      clientId,
    });

    return response.placeMarketOrder;
  }

  public async placeStopLimitOrder(
    marketCode: string,
    stopPriceUp: number,
    stopPriceDown: number,
    amount: number,
    limitPrice: number,
    sell: boolean,
    clientId?: string
  ): Promise<PlaceStopLimitOrder> {
    const query = `
      mutation sdk_placeStopLimitOrder(
        $marketCode: ID
        $stopPriceUp: BigInt
        $stopPriceDown: BigInt
        $amount: BigInt
        $limitPrice: BigInt
        $sell: Boolean
        $clientId: String
      ) {
        placeStopLimitOrder(
          marketCode: $marketCode
          stopPriceUp: $stopPriceUp
          stopPriceDown: $stopPriceDown
          amount: $amount
          limitPrice: $limitPrice
          sell: $sell
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
      stopPriceUp,
      stopPriceDown,
      amount,
      limitPrice,
      sell,
      clientId,
    });

    return response.placeStopLimitOrder;
  }

  public async placeStopMarketOrder(
    marketCode: string,
    stopPriceUp: number,
    stopPriceDown: number,
    amount: number,
    sell: boolean,
    clientId?: string
  ): Promise<PlaceStopMarketOrder> {
    const query = `
      mutation sdk_placeStopMarketOrder(
        $marketCode: ID
        $stopPriceUp: BigInt
        $stopPriceDown: BigInt
        $amount: BigInt
        $sell: Boolean
        $clientId: String
      ) {
        placeStopMarketOrder(
          marketCode: $marketCode
          stopPriceUp: $stopPriceUp
          stopPriceDown: $stopPriceDown
          amount: $amount
          sell: $sell
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
      stopPriceUp,
      stopPriceDown,
      amount,
      sell,
      clientId,
    });

    return response.placeStopMarketOrder;
  }

  public async cancelOrder(orderId: string): Promise<CancelOrder> {
    const query = `
      mutation sdk_cancelOrder($orderId: ID!) {
        cancelOrder(orderId: $orderId) {
          _id
          type
          status
          clientId
        }
      }
    `;

    const response = await this.apiClient.call(query, {
      orderId,
    });

    return response.cancelOrder;
  }
}
