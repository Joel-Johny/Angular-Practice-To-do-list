import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyComp2Component } from './Component/my-comp2/my-comp2.component';
import { AdderLogicComponent } from './Component/adder-logic/adder-logic.component';
import { InfTestComponent } from './Component/inf-test/inf-test.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MyComp2Component,
    AdderLogicComponent,
    InfTestComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
