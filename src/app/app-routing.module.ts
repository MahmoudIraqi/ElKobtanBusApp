import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {HomeContainerComponent} from "./components/home-container/home-container.component";

const routes: Routes = [
  {
    path: '', component: HomeContainerComponent, children: [
      {path: '', component: HomepageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
