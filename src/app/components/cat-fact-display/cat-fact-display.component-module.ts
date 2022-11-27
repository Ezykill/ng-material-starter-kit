import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatFactDisplayComponent } from './cat-fact-display.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CatFactDisplayComponent],
  providers: [],
  exports: [CatFactDisplayComponent]
})
export class CatFactDisplayComponentModule {
}
