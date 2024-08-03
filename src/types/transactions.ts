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
