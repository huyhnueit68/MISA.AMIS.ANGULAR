import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './view/employee/content/content.component';
import {PageNotFoundComponent} from './components/common/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: "employee", component: ContentComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
