import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ProductTableComponent } from './product-table.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
    imports: [CommonModule, MatTableModule, MatCardModule],
  declarations: [ProductTableComponent],
  providers: [],
  exports: [ProductTableComponent]
})
export class ProductTableComponentModule {
}
