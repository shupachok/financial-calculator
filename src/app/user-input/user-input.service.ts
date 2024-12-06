import { Injectable } from '@angular/core';
import {InvestmentResult} from '../investment-results/investment-result.model';
import {InvestmentInput} from './user-input.model';

@Injectable({
  providedIn: 'root'
})
export class UserInputService {

  constructor() {}
  investmentResults: InvestmentResult[] = [];

  public calculate(data:InvestmentInput){
    const {initialInvestment,annualInvestment,expectedReturn,duration} = data;

    let investmentCapital:number = initialInvestment;
    let totalInterest:number = 0;

    this.investmentResults = [];

    for(let i:number=1; i<=duration; i++){
      let interest:number = (investmentCapital + totalInterest)*expectedReturn/100;
      totalInterest += interest;
      let investmentValue:number = investmentCapital + totalInterest;

      this.investmentResults.push({
        year:i,
        investmentValue:investmentValue.toLocaleString('en-US', {maximumFractionDigits:2}),
        interest:interest.toLocaleString('en-US', {maximumFractionDigits:2}),
        totalInterest:totalInterest.toLocaleString('en-US', {maximumFractionDigits:2}),
        investmentCapital:investmentCapital.toLocaleString('en-US', {maximumFractionDigits:2})
      });

      investmentCapital+=annualInvestment;
    }

  }
}
