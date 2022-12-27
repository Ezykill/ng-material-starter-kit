import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { EmployeesListComponent } from './employees-list.component';
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
    imports: [MatCardModule, MatListModule, CommonModule, MatButtonModule, MatGridListModule],
  declarations: [EmployeesListComponent],
  providers: [],
  exports: [EmployeesListComponent]
})
export class EmployeesListComponentModule {
}
