import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ProductListComponent } from './product-list.component';
import {MatListModule} from "@angular/material/list";
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
  imports: [CommonModule, MatCardModule, MatListModule, RouterLinkWithHref],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListComponentModule {
}
