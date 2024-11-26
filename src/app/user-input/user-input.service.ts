import { Injectable } from '@angular/core';
import {InvestmentResult} from '../investment-results/investment-result.model';

@Injectable({
  providedIn: 'root'
})
export class UserInputService {

  constructor() {}

  public getInvestmentResult(enteredInitialInvestment:number,enteredAnnualInvestment:number,
                             enteredExpectedReturn:number, enteredDuration:number): InvestmentResult[]{
    let investmentResults: InvestmentResult[] = [];
    let investmentCapital:number = enteredInitialInvestment;
    let totalInterest:number = 0;

    for(let i:number=1; i<=enteredDuration; i++){
      let interest:number = (investmentCapital + totalInterest)*enteredExpectedReturn/100;
      totalInterest += interest;
      let investmentValue:number = investmentCapital + totalInterest;

      investmentResults.push({
        year:i,
        investmentValue:investmentValue.toFixed(2),
        interest:interest.toFixed(2),
        totalInterest:totalInterest.toFixed(2),
        investmentCapital:investmentCapital.toFixed(2)
      });

      investmentCapital+=enteredAnnualInvestment;
    }

    console.log("###investmentResults####");
    console.log(investmentResults);

    return investmentResults;
  }
}
