import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Defines an article.
 */
interface Article {
  id: string;
  name: string;
}

/**
 * Defines a category.
 */
export interface Category {
  id: string;
  name: string;
  articles: Article[];
}

/**
 * Defines the service responsible to retrieve the articles information.
 */
@Injectable()
export class ArticlesService {
  private readonly types = {};

  /**
   * Initializes a new instance of the ArticlesService class.
   *
   * @param {HttpClient} http   The HTTP client to use.
   */
  constructor(private http: HttpClient) {
    this.types['guide'] = this.http.get('./articles/guide/guide.json')
      .toPromise()
      .then(response => response as Category[]);

    this.types['tutoriels'] = this.http.get('./articles/tutoriels/tutoriels.json')
      .toPromise()
      .then(response => response as Category[]);
  }

  /**
   * Gets the categories of the specified article type.
   *
   * @param type                        The article type.
   * @returns {Promise<Category[]>}     A promise that contains the available categories for the article type specified.
   */
  getCategories(type): Promise<Category[]> {
    if (this.types[type]) {
      return this.types[type];
    }
    throw new Error('Invalid type specified');
  }

  /**
   * Gets an article associated with the parameters specified.
   *
   * @param type                  The article type.
   * @param categoryId            The category ID associated with the article to retrieve.
   * @param articleId             The article ID to retrieve.
   * @returns {Promise<string>}
   */
  getArticle(type, categoryId, articleId): Promise<string> {
    return this.http.get(`./articles/${type}/${categoryId}/${articleId}.md`, { responseType: 'text' })
      .toPromise()
      .then(response => response as string);
  }
}
