import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EmployeesListComponent } from './employees-list.component';
import {AsyncPipe, CommonModule} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {FlexModule} from "@angular/flex-layout/flex";

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule, AsyncPipe],
  declarations: [EmployeesListComponent],
  providers: [],
  exports: [EmployeesListComponent]
})
export class EmployeesListComponentModule {
}
