import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/custom-models/loan';
import { LoanDataService } from '../services/loan-data.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss']
})
export class LoanListComponent implements OnInit {
  loanList: Loan[]=[];
  constructor( private loanDataService: LoanDataService) {
    
   }

  ngOnInit() {
   // const subscription = this.loanDataService.loanUserData.subscribe((result)=>{
      this.loanList=this.loanDataService.loanUserDataSubject;
//  });
  }
}
