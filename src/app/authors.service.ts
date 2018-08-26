import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from './author';

/**
 * Defines the service responsible to retrieve the authors information.
 */
@Injectable()
export class AuthorsService {
  private readonly authors: Promise<Author[]>;

  /**
   * Initializes a new instance of the AuthorsService class.
   *
   * @param {HttpClient} http         The HTTP client to use.
   */
  constructor(private http: HttpClient) {
    this.authors = this.http.get('./articles/authors.json')
      .toPromise()
      .then(response => response as Author[]);
  }

  /**
   * Gets the authors of the articles.
   *
   * @returns {Promise<Author[]>}     A promise that contains a list of authors.
   */
  getAuthors(): Promise<Author[]> {
    return this.authors;
  }

  /**
   * Gets the author information associated with the specified name.
   *
   * @param {string} name             The name of the author to use to retrieve the information.
   * @returns {Promise<Author>}       A promise that contains the author information associated with the name specified.
   *                                  If the author is not found, the promise returned will contain undefined data.
   */
  getAuthor(name: string): Promise<Author> {
    return this.authors.then(authors => authors.find(author => author.name === name));
  }
}
