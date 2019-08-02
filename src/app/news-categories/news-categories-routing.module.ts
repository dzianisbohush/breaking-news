import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NewsCategoriesComponent} from './news-categories.component';


const routes: Routes = [
  { path: '', component: NewsCategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsCategoriesRoutingModule { }
