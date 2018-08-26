import { Author } from './author';

/**
 * Defines the available article types.
 */
export enum ArticleType {
  GUIDE = 'guide',
  TUTORIALS = 'tutoriels'
}

/**
 * Gets the ArticleType value associated with the string specified.
 *
 * @param {string} type             The string used to retrieve the ArticleType value.
 * @returns {ArticleType | null}    The ArticleType value associated with the string specified.
 *                                  NULL is returned if the string specified cannot be matched
 *                                  with the ArticleType enum.
 */
export function getArticleTypeFromString(type: string): ArticleType | null {
  const result = Object.keys(ArticleType).find(key => ArticleType[key] === type);
  return result ? ArticleType[result] : null;
}

/**
 * Defines an article.
 */
export interface Article {
  id: string;
  name: string;
  authors?: string[] | Author[];
  isVisible?: boolean;
}

/**
 * Defines a category.
 */
export interface Category {
  id: string;
  name: string;
  articles: Article[];
}
