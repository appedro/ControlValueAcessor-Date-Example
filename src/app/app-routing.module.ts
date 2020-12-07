import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScreenComponent} from "./main/screen/screen.component"
const routes: Routes = [{
  path: "form",
  component: ScreenComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
