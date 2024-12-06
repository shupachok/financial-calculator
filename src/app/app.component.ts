import { Component } from '@angular/core';
import {UserInputComponent} from './user-input/user-input.component';
import {HeaderComponent} from './header/header.component';
import {InvestmentResultsComponent} from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  imports: [UserInputComponent, HeaderComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
}
