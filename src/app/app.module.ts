import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanComponent } from './loan/loan.component';
import { LoanManagementComponent } from './loan-management/loan-management.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field/typings/form-field-module';
import { MatInputModule } from '@angular/material/input/typings/input-module';
import { MatRadioModule } from '@angular/material/radio/typings/radio-module';

@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
    LoanManagementComponent,
    LoanListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
