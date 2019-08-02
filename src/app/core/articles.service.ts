import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @ts-ignore
import { Observable } from 'rxjs/Observable';
import { map, catchError, tap } from 'rxjs/operators';

import {IArticles} from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  // @todo resolve const save
  // @todo env file
  baseUrl = 'https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=7965b195644f42b2a609f228d5580775&category=';

  constructor(private http: HttpClient) { }

  // @todo page pagination
  // @todo error handling
  getArticles(category: string): Observable<IArticles> {
    return this.http.get<IArticles>(this.baseUrl + category);
  }
}
