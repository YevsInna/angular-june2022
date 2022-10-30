import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import {HeaderComponent} from "./components/header/header.component";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
