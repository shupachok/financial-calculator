import {Component, Input} from '@angular/core';
import {InvestmentResult} from './investment-result.model';

@Component({
  selector: 'app-investment-results',
  imports: [],
  standalone: true,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() data!: InvestmentResult[];
}
