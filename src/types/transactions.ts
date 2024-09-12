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
  amount: number;
  balance: number;
  commission: number;
  currency: Currency;
  date: number;
  type: string;
  adds: boolean;
  hash: string | null;
  description: string | null;
  market: Market;
  price: number;
  cost: number;
  explorerURL: null;
  isInside: null;
  meta: Meta;
}

interface Currency {
  code: string;
  units: number;
}

interface Market {
  code: string;
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

export interface Meta {
  status: string | null;
}
