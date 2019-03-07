import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';


@Injectable()
export class BudgeterService {

  constructor(
    private http: Http,
    private httpClient: HttpClient
  ) {}

  private startDateSource = new Subject<any>();
  startDate$ = this.startDateSource.asObservable();

  private durationSource = new Subject<any>();
  duration$ = this.durationSource.asObservable();

  setStartDate(dateString) {
    this.startDateSource.next(dateString);
  }

  getBudget(budgetInfo) {
    return this.httpClient.post("http://localhost:3000/budget", budgetInfo)
    .pipe(
      map((response: any) => {

        return response;
      })
    )
  }


}
