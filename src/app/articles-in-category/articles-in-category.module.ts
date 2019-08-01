import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesInCategoryRoutingModule } from './articles-in-category-routing.module';
import { ArticlesInCategoryComponent } from './articles-in-category/articles-in-category.component';


@NgModule({
  declarations: [ArticlesInCategoryComponent],
  imports: [
    CommonModule,
    ArticlesInCategoryRoutingModule
  ]
})
export class ArticlesInCategoryModule { }
