import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Loan } from 'src/custom-models/loan';
import { LoanDataService } from '../services/loan-data.service';

@Component({
  selector: 'app-loan-management',
  templateUrl: './loan-management.component.html',
  styleUrls: ['./loan-management.component.scss']
})
export class LoanManagementComponent implements OnInit {

  addForm: FormGroup;
  submitted = false;
  loanList: Loan[] = [];
  constructor(private formBuilder: FormBuilder, private loanDataService: LoanDataService ) { }

  ngOnInit() {
      this.addForm = this.formBuilder.group({
          name: ['', Validators.required],
          address: ['', Validators.required],
          startDate: ['', Validators.required],
          endDate: ['', Validators.required],
          userEmail: ['', [Validators.required, Validators.email]],
          emi: ['', [Validators.required]],
          ammount: ['', [Validators.required]],
          type: ['Fixed'],
      });
  }

  get f() { return this.addForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.addForm.invalid) {
          return;
      }
      this.loanList.push(this.addForm.value);
      this.loanDataService.loanUserData.next(this.loanList);

  }

  onReset() {
      this.submitted = false;
      this.addForm.reset();
  }

}
