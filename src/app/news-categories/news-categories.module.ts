import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsCategoriesRoutingModule } from './news-categories-routing.module';
import { NewsCategoriesComponent } from './news-categories/news-categories.component';


@NgModule({
  declarations: [NewsCategoriesComponent],
  imports: [
    CommonModule,
    NewsCategoriesRoutingModule
  ]
})
export class NewsCategoriesModule { }
