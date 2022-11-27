import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {CatFactDisplayComponent} from './components/cat-fact-display/cat-fact-display.component';
import {AgeDisplayComponent} from './components/age-display/age-display.component';
import {ProductDetailComponentModule} from './components/product-detail/product-detail.component-module';
import {ProductServiceModule} from './services/product.service-module';
import {CatFactDisplayComponentModule} from './components/cat-fact-display/cat-fact-display.component-module';
import {CatFactServiceModule} from './services/cat-fact.service-module';
import {AgeDisplayComponentModule} from './components/age-display/age-display.component-module';
import {AgeServiceModule} from './services/age.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'product/:id', component: ProductDetailComponent}, {
    path: 'cat-fact',
    component: CatFactDisplayComponent
  }, {path: 'age/:name', component: AgeDisplayComponent}
  ]), ProductDetailComponentModule, ProductServiceModule, CatFactDisplayComponentModule, CatFactServiceModule, AgeDisplayComponentModule, AgeServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
