import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CatFactDisplayComponent } from './components/cat-fact-display/cat-fact-display.component';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CatFactDisplayComponentModule } from './components/cat-fact-display/cat-fact-display.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'product/:id', component: ProductDetailComponent }, { path: 'cat-fact', component: CatFactDisplayComponent }]), ProductDetailComponentModule, ProductServiceModule, CatFactDisplayComponentModule, CatFactServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
