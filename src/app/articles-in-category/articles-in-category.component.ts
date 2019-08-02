import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {ArticlesService} from '../core/articles.service';
import {IArticles} from '../shared/interfaces';

@Component({
  selector: 'app-articles-in-category',
  templateUrl: './articles-in-category.component.html',
  styleUrls: ['./articles-in-category.component.scss']
})
export class ArticlesInCategoryComponent implements OnInit {
  articles: any[];

  constructor(private articleService: ArticlesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    const category: string = this.route.snapshot.paramMap.get('category');

    this.articleService.getArticles(category)
      .subscribe((response: IArticles) => this.articles = response.articles);
  }

}
