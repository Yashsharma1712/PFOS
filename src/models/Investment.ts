export interface Investment {
  id: number;

  type: string;

  name: string;

  platform: string;

  purchaseDate: string;

  amount: number;

  units: number;

  buyPrice: number;

  currentPrice: number;

  notes: string;
}