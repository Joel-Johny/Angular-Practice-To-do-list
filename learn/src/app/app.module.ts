import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCompComponent } from './Component/my-comp/my-comp.component';
import { MyComp2Component } from './Component/my-comp2/my-comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    MyComp2Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
