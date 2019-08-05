import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// @ts-ignore
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {uuid} from './uuid';

import {IArticle, IArticles} from '../shared/interfaces';
import {Constants} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  // tslint:disable-next-line:variable-name
  private readonly _articles = new BehaviorSubject<IArticle[]>([]);

  readonly articles$ = this._articles.asObservable();

  constructor(private http: HttpClient) { }

  get articles(): IArticle[] {
    return this._articles.getValue();
  }

  set articles(val: IArticle[]) {
    this._articles.next(val);
  }

  // @todo page pagination
  // @todo error handling
  getArticles(category: string): Observable<IArticles> {
    return this.http.get<IArticles>(Constants.GET_ARTICLES_URL + category).pipe(
      tap((response) => {
        const {articles} = response;
        this.articles = articles.map((article) => ({...article, id: uuid()}));
      })
    );
  }

  getArticlesById(id: string): IArticle {
    return this.articles.find((article) => article.id === id);
  }
}
