import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UserInputService} from './user-input.service';

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

  enteredInitialInvestment:number=0.00;
  enteredAnnualInvestment:number=0.00;
  enteredExpectedReturn:number=0.00;
  enteredDuration:number=0;

  private userInputService = inject(UserInputService);

  onSubmit() {
    this.userInputService.getInvestmentResult(this.enteredInitialInvestment,this.enteredAnnualInvestment,
      this.enteredExpectedReturn,this.enteredDuration);
  }
}
