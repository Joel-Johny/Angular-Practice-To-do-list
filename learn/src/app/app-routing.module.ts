// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { MyComp2Component } from './Component/my-comp2/my-comp2.component';
import { AdderLogicComponent } from './Component/adder-logic/adder-logic.component';
import { CustomEvnDemoComponent } from './Component/custom-evn-demo/custom-evn-demo.component'
import { InfTestComponent } from './Component/inf-test/inf-test.component';
const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'page2', component: AdderLogicComponent },
  { path: 'page3', component: CustomEvnDemoComponent },
  { path: 'page4/:listOfnumbers', component: MyComp2Component },
  { path: 'inf', component: InfTestComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
