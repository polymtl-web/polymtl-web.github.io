import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleType, Category } from './article';

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
    Object.keys(ArticleType).forEach(key => {
      const value = ArticleType[key];
      this.types[value] = this.http.get(`./articles/${value}/${value}.json`)
        .toPromise()
        .then(response => {
          const categories = response as Category[];
          categories.forEach(c => c.articles = c.articles.filter(a => a.isVisible === undefined || a.isVisible));
          return categories;
        });
    });
  }

  /**
   * Gets the categories of the specified article type.
   *
   * @param type                        The article type.
   * @returns {Promise<Category[]>}     A promise that contains the available categories for the article type specified.
   */
  getCategories(type: ArticleType): Promise<Category[]> {
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
  getArticle(type: ArticleType, categoryId, articleId): Promise<string> {
    return this.http.get(`./articles/${type}/${categoryId}/${articleId}.md`, { responseType: 'text' })
      .toPromise()
      .then(response => response as string);
  }
}
