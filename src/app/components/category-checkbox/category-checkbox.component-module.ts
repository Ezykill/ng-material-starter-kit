import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoryCheckboxComponent } from './category-checkbox.component';

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatCheckboxModule],
  declarations: [CategoryCheckboxComponent],
  providers: [],
  exports: [CategoryCheckboxComponent]
})
export class CategoryCheckboxComponentModule {
}
