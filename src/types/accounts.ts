export interface Account {
  _id: string;
  currency: Currency;
  balance: number;
  availableBalance: number;
  availableNetworks: AvailableNetwork[];
  balanceUSD: number;
  balanceCLP: number;
}

export interface AvailableNetwork {
  code: string;
}

export interface Currency {
  code: Currencies;
  units: number;
}

export type Currencies =
  | 'CLP'
  | 'COP'
  | 'MXN'
  | 'USD'
  | 'USDT'
  | 'BTC'
  | 'DAI'
  | 'ETH'
  | 'BNB'
  | 'LTC'
  | 'XRP'
  | 'XLM'
  | 'BCH'
  | 'CHA'
  | 'LUK'
  | 'DASH'
  | 'TRX'
  | 'EOS'
  | 'DOT'
  | 'ADA'
  | 'SOL'
  | 'MATIC'
  | 'AVAX'
  | 'PEN'
  | 'USDC'
  | 'XAUT'
  | 'EURT'
  | 'ACAI';
