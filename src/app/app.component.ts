import { Component } from '@angular/core';
import { NgForm, FormControl } from "@angular/forms";
import { Subscription } from 'rxjs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BudgeterService } from './budgeter.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BudgeterService]
})
export class AppComponent {
  startDate;
  numberOfDays;

  constructor(private budgeterService: BudgeterService) {
    budgeterService.startDate$.subscribe(
      date => {
        this.startDate = date
      }
    );

    budgeterService.duration$.subscribe(
      length => { this.numberOfDays = length }
    );
  }

  title = 'bananaBudgeter';

  getBudget() {
    var budgetHash = {startDate: this.startDate, numberOfDays: 100}
    this.budgeterService.getBudget(budgetHash)
    .subscribe((response: any) => {
      console.log(response)
    });
  }
}
