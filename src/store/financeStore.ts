export interface Investment {
  id: number;
  type:
    | "Mutual Fund"
    | "Stock"
    | "Crypto"
    | "Gold"
    | "FD"
    | "Bond"
    | "EPF"
    | "NPS";

  name: string;

  investedAmount: number;

  currentValue: number;

  quantity?: number;

  purchaseDate?: string;

  currentPrice?: number;

  notes?: string;
}


export interface Income {
  id:number;
  source:string;
  amount:number;
  date:string;
}


export interface Expense {
  id:number;
  category:string;
  amount:number;
  date:string;
}


export interface Loan {

 id:number;

 name:string;

 outstanding:number;

 emi:number;

 interestRate:number;

}


export interface FinanceData {

 income:Income[];

 expenses:Expense[];

 investments:Investment[];

 loans:Loan[];

 bankBalance:number;

 cashInHand:number;

}


export const financeData:FinanceData={


income:[
 {
 id:1,
 source:"Salary",
 amount:0,
 date:""
 }
],


expenses:[],


investments:[],


loans:[],


bankBalance:0,

cashInHand:0


};