import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { EmployeesListComponent } from './employees-list.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [EmployeesListComponent],
  providers: [],
  exports: [EmployeesListComponent]
})
export class EmployeesListComponentModule {
}
