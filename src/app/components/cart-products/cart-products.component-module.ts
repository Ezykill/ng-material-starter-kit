import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartProductsComponent } from './cart-products.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [CartProductsComponent],
  providers: [],
  exports: [CartProductsComponent]
})
export class CartProductsComponentModule {
}
