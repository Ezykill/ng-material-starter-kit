import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryChipsComponent } from './components/category-chips/category-chips.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CategoryChipsComponentModule } from './components/category-chips/category-chips.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { AddProductServiceModule } from './services/add-product.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'categories', component: CategoryChipsComponent }, { path: 'add-product', component: ProductFormComponent }, { path: 'create-product', component: ProductFormComponent }]), CategoryChipsComponentModule, CategoryServiceModule, ProductFormComponentModule, AddProductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
