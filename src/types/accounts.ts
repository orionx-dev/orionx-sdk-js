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
  code: string;
  units: number;
}
