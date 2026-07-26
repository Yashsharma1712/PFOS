export interface Investment {
  id: string;

  assetClass:
    | "Mutual Fund"
    | "Stock"
    | "ETF"
    | "Gold"
    | "Crypto"
    | "Fixed Deposit";

  name: string;
  platform: string;
  purchaseDate: string;

  buyPrice: number;
  currentPrice: number;
  quantity: number;
  investedAmount: number;

  remarks: string;
}