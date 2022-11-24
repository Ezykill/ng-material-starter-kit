import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { RegisterServiceModule } from './services/register.service-module';
import { LoginFormComponentModule } from './components/login-form/login-form.component-module';
import { LoginServiceModule } from './services/login.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'create-product', component: ProductFormComponent }, { path: 'create-employee', component: EmployeeFormComponent }, { path: 'register', component: RegisterFormComponent }, { path: 'login', component: LoginFormComponent }]), ProductFormComponentModule, ProductServiceModule, EmployeeFormComponentModule, EmployeeServiceModule, RegisterFormComponentModule, RegisterServiceModule, LoginFormComponentModule, LoginServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
