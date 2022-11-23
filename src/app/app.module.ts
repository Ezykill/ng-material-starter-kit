import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {ProductListComponentModule} from "./components/product-list/product-list.component-module";
import {CategoryListComponentModule} from "./components/category-list/category-list.component-module";
import {CryptoListComponentModule} from "./components/crypto-list/crypto-list.component-module";
import {HolidayListComponentModule} from "./components/holiday-list/holiday-list.component-module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProductListComponentModule,
    CategoryListComponentModule,
    CryptoListComponentModule,
    HolidayListComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
