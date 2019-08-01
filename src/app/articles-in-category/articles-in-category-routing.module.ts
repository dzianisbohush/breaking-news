import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ArticlesInCategoryComponent} from './articles-in-category/articles-in-category.component';


const routes: Routes = [
  {path: '', component: ArticlesInCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesInCategoryRoutingModule { }
