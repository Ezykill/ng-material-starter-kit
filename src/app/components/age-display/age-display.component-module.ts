import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgeDisplayComponent } from './age-display.component';


@NgModule({
  imports: [CommonModule],
  declarations: [AgeDisplayComponent],
  providers: [],
  exports: [AgeDisplayComponent]
})
export class AgeDisplayComponentModule {
}
