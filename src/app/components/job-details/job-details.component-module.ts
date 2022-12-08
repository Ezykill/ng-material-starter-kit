import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDetailsComponent } from './job-details.component';

@NgModule({
  imports: [CommonModule],
  declarations: [JobDetailsComponent],
  providers: [],
  exports: [JobDetailsComponent]
})
export class JobDetailsComponentModule {
}
