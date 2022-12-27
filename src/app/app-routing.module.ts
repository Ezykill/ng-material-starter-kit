import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CryptoListComponent} from './components/crypto-list/crypto-list.component';
import {EmployeesListComponent} from './components/employees-list/employees-list.component';
import {CryptoListComponentModule} from './components/crypto-list/crypto-list.component-module';
import {CryptoServiceModule} from './services/crypto.service-module';
import {EmployeesListComponentModule} from './components/employees-list/employees-list.component-module';
import {EmployeesServiceModule} from './services/employees.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'crypto-master-details',
    component: CryptoListComponent
  }, {
    path: 'employees-master-details',
    component: EmployeesListComponent
  }]), CryptoListComponentModule, CryptoServiceModule, EmployeesListComponentModule, EmployeesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
