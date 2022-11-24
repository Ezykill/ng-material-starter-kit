import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {EmployeeFormComponent} from './components/employee-form/employee-form.component';
import {ProductFormComponentModule} from './components/product-form/product-form.component-module';
import {ProductServiceModule} from './services/product.service-module';
import {EmployeeFormComponentModule} from './components/employee-form/employee-form.component-module';
import {EmployeeServiceModule} from './services/employee.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'create-product', component: ProductFormComponent}, {
    path: 'create-employee',
    component: EmployeeFormComponent
  }]), ProductFormComponentModule, ProductServiceModule, EmployeeFormComponentModule, EmployeeServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
