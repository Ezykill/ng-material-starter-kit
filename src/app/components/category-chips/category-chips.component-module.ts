import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { CategoryChipsComponent } from './category-chips.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@NgModule({
  imports: [MatChipsModule, CommonModule, MatButtonToggleModule],
  declarations: [CategoryChipsComponent],
  providers: [],
  exports: [CategoryChipsComponent]
})
export class CategoryChipsComponentModule {
}
