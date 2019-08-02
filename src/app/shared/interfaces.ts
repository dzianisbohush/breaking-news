interface IArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id?: any;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export interface IArticles {
  articles: IArticle[];
  status: string;
  totalResults: number;
}
