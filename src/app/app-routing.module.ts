import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'categories',
    loadChildren: () => import('./news-categories/news-categories.module').then(mod => mod.NewsCategoriesModule),
  },
  {
    path: 'articles/:category',
    loadChildren: () => import('./articles-in-category/articles-in-category.module').then(mod => mod.ArticlesInCategoryModule)
  },
  {
    path: 'article/:id',
    loadChildren: () => import('./article/article.module').then(mod => mod.ArticleModule)
  },
  { path: '',   redirectTo: '/categories', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: '/categories' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
