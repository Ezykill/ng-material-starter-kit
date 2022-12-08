import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { JobListComponentModule } from './components/job-list/job-list.component-module';
import { JobServiceModule } from './services/job.service-module';
import { JobDetailsComponentModule } from './components/job-details/job-details.component-module';
import { JobDetailsServiceModule } from './services/job-details.service-module';
import { LoginPageComponentModule } from './components/login-page/login-page.component-module';
import { LoginServiceModule } from './services/login.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'jobs', component: JobListComponent }, { path: 'jobs/:id', component: JobDetailsComponent }, { path: 'login', component: LoginPageComponent }]), JobListComponentModule, JobServiceModule, JobDetailsComponentModule, JobDetailsServiceModule, LoginPageComponentModule, LoginServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
