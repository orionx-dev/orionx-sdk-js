import { Currencies } from './accounts';
import { MarketCodes } from './markets';

export interface GetOrdersParameters {
  filter?: string;
  marketCode?: string;
  onlyOpen?: boolean;
  onlyClosed?: boolean;
  currencyCode?: string;
  onlyFilled?: boolean;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortType?: string;
}

export interface Order {
  _id: string;
  type: string;
  amount: number;
  limitPrice: number;
  stopPriceDown: null;
  stopPriceUp: null;
  status: string;
  createdAt: number;
  activatedAt: number;
  closedAt: null;
  market: MarketData;
  clientId: null;
}

interface MarketData {
  code: MarketCodes;
  mainCurrency: CurrencyData;
  secondaryCurrency: CurrencyData;
}

interface CurrencyData {
  code: Currencies;
  units: number;
}

export interface PlaceLimitOrder {
  _id: string;
  type: string;
  amount: number;
  limitPrice: number;
  status: string;
  createdAt: number;
  market: Market;
  clientId: null;
}

export interface PlaceStopLimitOrder {
  _id: string;
  type: string;
  amount: number;
  limitPrice: number;
  status: string;
  createdAt: number;
  market: Market;
  clientId: null;
}

export interface PlaceMarketOrder {
  _id: string;
  type: string;
  amount: number;
  limitPrice: null;
  status: string;
  createdAt: number;
  market: Market;
  clientId: null;
}

export interface PlaceStopMarketOrder {
  _id: string;
  type: string;
  amount: number;
  limitPrice: null;
  status: string;
  createdAt: number;
  market: Market;
  clientId: null;
}

interface Market {
  code: MarketCodes;
}

export interface CancelOrder {
  _id: string;
  type: string;
  status: string;
  clientId: null;
}
