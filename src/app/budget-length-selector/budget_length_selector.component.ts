import { Component } from '@angular/core';
import { BudgeterService } from '../budgeter.service';

@Component({
  selector: 'budget-length-selector',
  templateUrl: './budget_length_selector.component.html',
  styleUrls: ['./budget_length_selector.component.css']
})
export class BudgetLengthSelectorComponent {
  title = 'bananaBudgeter';
  duration;

  constructor(private budgeterService: BudgeterService){}

  setDuration() {
      this.budgeterService.setDuration(this.duration)
  }
}
