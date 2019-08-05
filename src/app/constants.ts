import {environment} from '../environments/environment';

export abstract class Constants {
  static readonly GET_ARTICLES_URL: string =
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=${environment.newsApiKey}&category=`;
}
