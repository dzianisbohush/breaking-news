import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { ArticlesInCategoryRoutingModule } from './articles-in-category-routing.module';
import { ArticlesInCategoryComponent } from './articles-in-category.component';
import { ArticleCardComponent } from './article-card/article-card.component';


@NgModule({
  declarations: [ArticlesInCategoryComponent, ArticleCardComponent],
  imports: [
    CommonModule,
    ArticlesInCategoryRoutingModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatProgressSpinnerModule
  ]

})
export class ArticlesInCategoryModule { }
