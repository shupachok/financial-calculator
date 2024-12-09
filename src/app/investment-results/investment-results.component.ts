import {Component} from '@angular/core';
import {InvestmentResult} from './investment-result.model';
import {UserInputService} from '../user-input/user-input.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
  standalone: false
})
export class InvestmentResultsComponent {

  constructor(private userInputService: UserInputService) {
  }

  getResults(): InvestmentResult[] {
    return this.userInputService.investmentResults;
  }
}
