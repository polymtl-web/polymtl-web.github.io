import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getArticleTypeFromString, ArticleType, Category } from '../article';
import { ArticlesService } from '../articles.service';

/**
 * Defines the component responsible to display the tutorials or guide pages.
 */
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  categories: Category[];
  selectedArticleId: string;
  selectedCategoryId: string;
  selectedType: ArticleType;

  /**
   * Initializes a new instance of the ArticlesComponent class.
   *
   * @param {ActivatedRoute} route                The current activated route.
   * @param {ArticlesService} articlesService     The articles service to use.
   */
  constructor(private route: ActivatedRoute, private articlesService: ArticlesService) { }

  /**
   * Occurs when the component is initialized.
   */
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedArticleId = params.get('article') || undefined;
      this.selectedCategoryId = params.get('category') || undefined;
      this.selectedType = getArticleTypeFromString(this.route.snapshot.url[0].path);

      // If the article type specified is invalid.
      if (!this.selectedType) {
        return;
      }

      // Load the categories of the current article type.
      this.articlesService.getCategories(this.selectedType).then(categories => {
        this.categories = categories;

        // If there is no article specified, use default.
        if (!this.selectedCategoryId && !this.selectedArticleId) {
          this.selectedArticleId = this.categories[0].articles[0].id;
          this.selectedCategoryId = this.categories[0].id;
        } else {
          const category = categories.find(c => c.id === this.selectedCategoryId);

          // If the specified category is invalid.
          if (!this.selectedCategoryId || !category) {
            this.selectedCategoryId = null;
          }
          // If the specified article is invalid.
          if (!this.selectedArticleId || category &&
            !category.articles.find(a => a.id === this.selectedArticleId)) {
            this.selectedArticleId = null;
          }
        }
      });
    });
  }
}
