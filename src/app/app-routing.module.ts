import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CatFactDisplayComponent } from './components/cat-fact-display/cat-fact-display.component';
import { AgeDisplayComponent } from './components/age-display/age-display.component';
import { CartProductsComponent } from './components/cart-products/cart-products.component';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CatFactDisplayComponentModule } from './components/cat-fact-display/cat-fact-display.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';
import { AgeDisplayComponentModule } from './components/age-display/age-display.component-module';
import { AgeServiceModule } from './services/age.service-module';
import { CartProductsComponentModule } from './components/cart-products/cart-products.component-module';
import { CartServiceModule } from './services/cart.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'product/:id', component: ProductDetailComponent }, { path: 'cat-fact', component: CatFactDisplayComponent }, { path: 'age/:name', component: AgeDisplayComponent }, { path: 'cart/:id', component: CartProductsComponent }]), ProductDetailComponentModule, ProductServiceModule, CatFactDisplayComponentModule, CatFactServiceModule, AgeDisplayComponentModule, AgeServiceModule, CartProductsComponentModule, CartServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
