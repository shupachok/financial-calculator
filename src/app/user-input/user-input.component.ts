import {Component, EventEmitter, inject, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UserInputService} from './user-input.service';
import {InvestmentResult} from '../investment-results/investment-result.model';

@Component({
  selector: 'app-user-input',
  imports: [
    FormsModule
  ],

  templateUrl: './user-input.component.html',
  standalone: true,
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() submit = new EventEmitter<InvestmentResult[]>();
  // submit = output<InvestmentResult[]>()
  enteredInitialInvestment:number=0.00;
  enteredAnnualInvestment:number=0.00;
  enteredExpectedReturn:number=0.00;
  enteredDuration:number=0;

  private userInputService = inject(UserInputService);

  onSubmit() {
    this.submit.emit(
      this.userInputService.getInvestmentResult(
        this.enteredInitialInvestment,
        this.enteredAnnualInvestment,
        this.enteredExpectedReturn,
        this.enteredDuration));
  }
}
