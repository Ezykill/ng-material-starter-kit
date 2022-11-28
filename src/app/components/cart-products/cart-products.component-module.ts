import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartProductsComponent } from './cart-products.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CartProductsComponent],
  providers: [],
  exports: [CartProductsComponent]
})
export class CartProductsComponentModule {
}
