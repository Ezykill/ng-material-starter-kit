import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {ProductListComponentModule} from './components/product-list/product-list.component-module';
import {ProductServiceModule} from './services/product.service-module';
import {ProductDetailsComponentModule} from './components/product-details/product-details.component-module';
import {ProductDetailsServiceModule} from './services/product-details.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'product-list', component: ProductListComponent}, {
    path: 'product/:id',
    component: ProductDetailsComponent
  }, {
    path: 'prod/:id',
    component: ProductDetailsComponent
  }]), ProductListComponentModule, ProductServiceModule, ProductDetailsComponentModule, ProductDetailsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
