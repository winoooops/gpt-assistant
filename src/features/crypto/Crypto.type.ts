export interface CryptoAsset {
  name: string;
  totalHolding: number;
  price: number;
  transactions: CryptoTransaction[];
}

export interface CryptoTransaction {
  name: string,
  pair: string,
  side: "BUY" | "SELL";
  executed: number;
  price: number;
  cost: number;
  fee?: number;
}