export interface IncomeTransaction {
  id: string;

  date: string;

  source: string;

  amount: number;

  category:
    | "Salary"
    | "Bonus"
    | "Freelance"
    | "Rental"
    | "Interest"
    | "Dividend"
    | "Other";

  notes?: string;
}
export interface ExpenseTransaction {
  id: string;

  date: string;

  category: string;

  amount: number;

  paymentMethod: string;

  notes?: string;
}
export interface MutualFundTransaction {
  id: string;

  fundName: string;

  purchaseDate: string;

  amount: number;

  nav: number;

  units: number;

  platform: string;

  type: "SIP" | "Lumpsum";
}