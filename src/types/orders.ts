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
