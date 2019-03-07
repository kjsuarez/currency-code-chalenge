import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./angular-material.module";

import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date_picker.component';
import { BudgetLengthSelectorComponent } from './budget-length-selector/budget_length_selector.component';
import { BudgeterService } from './budgeter.service';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    BudgetLengthSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
