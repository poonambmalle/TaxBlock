import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanListComponent } from './loan-list/loan-list.component';
import { LoanManagementComponent } from './loan-management/loan-management.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'loan-management', component: LoanManagementComponent },
  { path: 'loan-list', component: LoanListComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
