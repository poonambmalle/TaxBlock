import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Loan } from 'src/custom-models/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanDataService {
  public loanUserData = new BehaviorSubject<Loan[]>([]);
  constructor() {
   
   }
   public get loanUserDataSubject(): Loan[] {
    return this.loanUserData.value;
  }
}
