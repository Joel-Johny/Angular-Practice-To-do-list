import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyComp2Component } from './Component/my-comp2/my-comp2.component';
import { AdderLogicComponent } from './Component/adder-logic/adder-logic.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComp2Component,
    AdderLogicComponent,
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
