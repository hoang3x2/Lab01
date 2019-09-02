import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { DetailproductsComponent } from './detailproducts/detailproducts.component';
import { HienimageComponent } from './hienimage/hienimage.component';
import { Baitap1Component } from './baitap1/baitap1.component';
import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap3Component } from './baitap3/baitap3.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailproductsComponent,
    HienimageComponent,
    Baitap1Component,
    Baitap2Component,
    Baitap3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
