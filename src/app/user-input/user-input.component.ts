import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserInputService} from './user-input.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
  standalone: false
})
export class UserInputComponent {

  userInputForm = new FormGroup({
    initialInvestment: new FormControl('', [Validators.required, Validators.min(0)]),
    annualInvestment: new FormControl('', [Validators.required, Validators.min(0)]),
    expectedReturn: new FormControl('', [Validators.required, Validators.min(0)]),
    duration: new FormControl('', [Validators.required, Validators.min(0)])
  })

  // submit = output<InvestmentResult[]>()
  // enteredInitialInvestment:number=0.00;
  // enteredAnnualInvestment:number=0.00;
  // enteredExpectedReturn:number=0.00;
  // enteredDuration:number=0;

  // private userInputService = inject(UserInputService);

  constructor(private userInputService: UserInputService) {
  }

  onSubmit() {
    let formInputValue = this.userInputForm.value;

    this.userInputService.calculate({
      initialInvestment: Number(formInputValue.initialInvestment),
      expectedReturn: Number(formInputValue.expectedReturn),
      annualInvestment: Number(formInputValue.annualInvestment),
      duration: Number(formInputValue.duration)
    });
  }
}
