// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { MyComp2Component } from './Component/my-comp2/my-comp2.component';
import { AdderLogicComponent } from './Component/adder-logic/adder-logic.component';
import { InfTestComponent } from './Component/inf-test/inf-test.component';
import { FetchDataComponent } from './Component/fetch-data/fetch-data.component';
import { ObsVsproComponent } from './Component/obs-vspro/obs-vspro.component';
const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'page2', component: AdderLogicComponent },
  { path: 'page4/:listOfnumbers', component: MyComp2Component },
  { path: 'inf', component: InfTestComponent },
  { path: 'fetch', component: FetchDataComponent },
  { path: 'difference', component: ObsVsproComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
