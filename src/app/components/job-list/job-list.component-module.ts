import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { JobListComponent } from './job-list.component';
import {MatCardModule} from "@angular/material/card";
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
  imports: [MatListModule, CommonModule, MatCardModule, RouterLinkWithHref],
  declarations: [JobListComponent],
  providers: [],
  exports: [JobListComponent]
})
export class JobListComponentModule {
}
