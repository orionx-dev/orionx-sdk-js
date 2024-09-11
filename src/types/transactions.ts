import { Currencies } from './accounts';
import { MarketCodes } from './markets';

export interface GetTransactionsParameters {
  filter?: string;
  walletId?: string;
  types?: Array<
    | 'trade-in'
    | 'trade-out'
    | 'send'
    | 'recieve'
    | 'devolution'
    | 'revert'
    | 'rebate'
  >;
  initPeriod?: Date;
  finalPeriod?: Date;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortType?: string;
}

export interface Transaction {
  _id: string;
  amount: number;
  balance: number;
  commission: number;
  currency: Currency;
  date: number;
  type: string;
  adds: boolean;
  hash: null;
  description: null;
  market: Market;
  price: number;
  cost: number;
  explorerURL: null;
  isInside: null;
  meta: null;
}

interface Currency {
  code: Currencies;
  units: number;
}

interface Market {
  code: MarketCodes;
  mainCurrency: Currency;
  secondaryCurrency: Currency;
}

export interface Send {
  _id: string;
  type: string;
  amount: number;
  price: null;
  hash: null;
  date: number;
  market: null;
  meta: null;
}

export interface WithdrawalRequest {
  _id: string;
  amount: number;
  commission: number;
  date: number;
  type: string;
  description: string;
}
