import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import {RouterModule} from '@angular/router';
import { HtmlParser } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SinhvienComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'home',component:HomeComponent},
      {path:'home/:ID',component:SinhvienComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
