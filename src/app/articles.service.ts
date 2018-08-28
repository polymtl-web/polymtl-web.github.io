import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleType, Category } from './article';
import { Author } from './author';
import { AuthorsService } from './authors.service';

/**
 * Defines the service responsible to retrieve the articles information.
 */
@Injectable()
export class ArticlesService {
  private readonly types = {};

  /**
   * Initializes a new instance of the ArticlesService class.
   *
   * @param {HttpClient} http                 The HTTP client to use.
   * @param {AuthorsService} authorsService   The authors service to use.
   */
  constructor(private http: HttpClient, authorsService: AuthorsService) {
    Object.keys(ArticleType).forEach(key => {
      const value = ArticleType[key];
      this.types[value] = Promise.all([
        this.http.get(`./articles/${value}/${value}.json`).toPromise(),
        authorsService.getAuthors()
      ])
      .then(([response, authorsRetrieved]) => {
        const categories = response as Category[];
        const authors = authorsRetrieved as Author[];

        categories.forEach(category => {
          category.articles = category.articles.filter(article => article.isVisible === undefined || article.isVisible)
            .map(article => {
              article.authors = (article.authors as string[]).map(name => authors.find(author => author.name === name));
              return article;
            });
        });
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
