import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityDisplayComponent } from './activity-display.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ActivityDisplayComponent],
  providers: [],
  exports: [ActivityDisplayComponent]
})
export class ActivityDisplayComponentModule {
}
