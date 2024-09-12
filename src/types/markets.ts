export interface Market {
  code: string;
  name: string;
  mainCurrency: Currency;
  secondaryCurrency: Currency;
  lastTrade: LastTrade;
}

interface LastTrade {
  price: number;
}

interface Currency {
  code: string;
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
