import { Component } from '@angular/core';
import {UserInputComponent} from './user-input/user-input.component';
import {HeaderComponent} from './header/header.component';
import {InvestmentResultsComponent} from './investment-results/investment-results.component';
import {InvestmentResult} from './investment-results/investment-result.model';

@Component({
  selector: 'app-root',
  imports: [UserInputComponent, HeaderComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'financial-calculator';
  returnOfInvestment:InvestmentResult[] = [];

  onCalculate(results: InvestmentResult[]) {
    console.log("####onCalculate####")
    console.log(results);
    this.returnOfInvestment=results;
  }

}
