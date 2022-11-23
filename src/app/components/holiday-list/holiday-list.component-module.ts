import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { HolidayListComponent } from './holiday-list.component';

@NgModule({
  imports: [MatListModule, FlexModule, CommonModule, MatCardModule, MatButtonModule, MatMenuModule, MatFormFieldModule, MatSelectModule, MatOptionModule],
  declarations: [HolidayListComponent],
  providers: [],
  exports: [HolidayListComponent]
})
export class HolidayListComponentModule {
}
