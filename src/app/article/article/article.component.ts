import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../../core/articles.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: any;

  constructor(
    private articleService: ArticlesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (!this.articleService.articles.length) {
      this.goToCategoriesPage();

      return;
    }

    this.getArticle();
  }

  getArticle(): void {
    const articleId: string = this.route.snapshot.paramMap.get('id');
    this.article = this.articleService.getArticlesById(articleId);
  }

  goToCategoriesPage() {
    this.router.navigate(['/categories']);
  }

}
