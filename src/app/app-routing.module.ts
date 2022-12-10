import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductListComponent } from './components/filtered-product-list/filtered-product-list.component';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { FilteredProductListComponentModule } from './components/filtered-product-list/filtered-product-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductsServiceModule } from './services/products.service-module';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { EmployeesListComponentModule } from './components/employees-list/employees-list.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: FilteredProductListComponent }, { path: 'sorted-products', component: SortedProductListComponent }, { path: 'employees', component: EmployeesListComponent }]), FilteredProductListComponentModule, CategoriesServiceModule, ProductsServiceModule, SortedProductListComponentModule, EmployeesListComponentModule, EmployeesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
