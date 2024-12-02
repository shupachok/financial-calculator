import { Injectable } from '@angular/core';
import {InvestmentResult} from '../investment-results/investment-result.model';
import {InvestmentInput} from './user-input.model';

@Injectable({
  providedIn: 'root'
})
export class UserInputService {

  constructor() {}

  public getInvestmentResult(data:InvestmentInput): InvestmentResult[]{
    const {initialInvestment,annualInvestment,expectedReturn,duration} = data;
    let investmentResults: InvestmentResult[] = [];
    let investmentCapital:number = initialInvestment;
    let totalInterest:number = 0;

    for(let i:number=1; i<=duration; i++){
      let interest:number = (investmentCapital + totalInterest)*expectedReturn/100;
      totalInterest += interest;
      let investmentValue:number = investmentCapital + totalInterest;

      investmentResults.push({
        year:i,
        investmentValue:investmentValue.toLocaleString('en-US', {maximumFractionDigits:2}),
        interest:interest.toLocaleString('en-US', {maximumFractionDigits:2}),
        totalInterest:totalInterest.toLocaleString('en-US', {maximumFractionDigits:2}),
        investmentCapital:investmentCapital.toLocaleString('en-US', {maximumFractionDigits:2})
      });

      investmentCapital+=annualInvestment;
    }

    console.log("###investmentResults####");
    console.log(investmentResults);

    return investmentResults;
  }
}
