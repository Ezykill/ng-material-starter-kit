import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DogListComponent } from './components/dog-list/dog-list.component';
import { DogListComponentModule } from './components/dog-list/dog-list.component-module';
import { DogServiceModule } from './services/dog.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'exam-subject-dogs', component: DogListComponent }]), DogListComponentModule, DogServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
