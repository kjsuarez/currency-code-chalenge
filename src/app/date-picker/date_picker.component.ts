import { Component } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { BudgeterService } from '../budgeter.service';

@Component({
  selector: 'date-picker',
  templateUrl: './date_picker.component.html',
  styleUrls: ['./date_picker.component.css']
})
export class DatePickerComponent {

  startDate;
  dateString;

  constructor(private budgeterService: BudgeterService){}

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.startDate = event.value
    this.dateString = this.dateToString(event.value)
    this.budgeterService.setStartDate(this.dateString)
  }

  dateToString(date) {
    return (date.getMonth() + 1) + "/" + this.startDate.getDate() + "/" + this.startDate.getFullYear()
  }
}
