import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { DogListComponent } from './dog-list.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule, MatTableModule, MatButtonModule, MatCardModule],
  declarations: [DogListComponent],
  providers: [],
  exports: [DogListComponent]
})
export class DogListComponentModule {
}
