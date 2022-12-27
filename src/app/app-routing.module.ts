import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'crypto-master-details', component: CryptoListComponent }]), CryptoListComponentModule, CryptoServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
