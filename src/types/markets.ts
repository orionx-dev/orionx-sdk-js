import { Currencies } from './accounts';

export interface Market {
  code: MarketCodes;
  name: string;
  mainCurrency: Currency;
  secondaryCurrency: Currency;
  lastTrade: LastTrade;
}

interface LastTrade {
  price: number;
}

interface Currency {
  code: Currencies;
  name: string;
  units: number;
}

export interface OrderBook {
  sell: Order[];
  buy: Order[];
  spread: number;
  mid: number;
}

interface Order {
  amount: number;
  limitPrice: number;
}

export type MarketCodes =
  | 'BTCCLP'
  | 'USDTCLP'
  | 'ETHCLP'
  | 'TRXCLP'
  | 'USDCCLP'
  | 'ACAICLP'
  | 'EURTCLP'
  | 'XAUTCLP'
  | 'XLMCLP'
  | 'XRPCLP'
  | 'BNBCLP'
  | 'DAICLP'
  | 'LTCCLP'
  | 'BCHCLP'
  | 'DASHCLP'
  | 'EOSCLP'
  | 'DOTCLP'
  | 'ADACLP'
  | 'SOLCLP'
  | 'MATICCLP'
  | 'AVAXCLP'
  | 'CHACLP'
  | 'LUKCLP'
  | 'BTCMXN'
  | 'ETHMXN'
  | 'XRPMXN'
  | 'XLMMXN'
  | 'TRXMXN'
  | 'BNBMXN'
  | 'DAIMXN'
  | 'LTCMXN'
  | 'BCHMXN'
  | 'ETHBTC'
  | 'XRPBTC'
  | 'XLMBTC'
  | 'TRXBTC'
  | 'BNBBTC'
  | 'LTCBTC'
  | 'CHABTC'
  | 'BCHBTC'
  | 'DASHBTC'
  | 'EOSBTC'
  | 'BTCUSDT'
  | 'ETHUSDT'
  | 'EOSUSDT'
  | 'DOTUSDT'
  | 'ADAUSDT'
  | 'SOLUSDT'
  | 'MATICUSDT'
  | 'AVAXUSDT'
  | 'USDCUSDT'
  | 'ETHDAI'
  | 'BTCDAI'
  | 'TRXDAI'
  | 'BNBDAI';
