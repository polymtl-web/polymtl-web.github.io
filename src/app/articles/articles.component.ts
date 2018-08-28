import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getArticleTypeFromString, Article, ArticleType, Category } from '../article';
import { ArticlesService } from '../articles.service';
import { WindowScrollingService } from '../window-scrolling.service';

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
  isSidebarVisible = false;
  selectedArticleId: string;
  selectedArticle: Article;
  selectedCategoryId: string;
  selectedType: ArticleType;

  /**
   * Initializes a new instance of the ArticlesComponent class.
   *
   * @param {ActivatedRoute}          route                       The current activated route.
   * @param {ArticlesService}         articlesService             The articles service to use.
   * @param {WindowScrollingService}  windowScrollingService      The service to use to manage the window scroll.
   */
  constructor(private route: ActivatedRoute, private articlesService: ArticlesService,
              private windowScrollingService: WindowScrollingService) { }

  /**
   * Occurs when the component is initialized.
   */
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedArticleId = params.get('article') || undefined;
      this.selectedArticle = undefined;
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
          this.selectedArticle = this.categories[0].articles[0];
          this.selectedCategoryId = this.categories[0].id;
        } else {
          const category = categories.find(c => c.id === this.selectedCategoryId);

          // If the specified category is invalid.
          if (!this.selectedCategoryId || !category) {
            this.selectedCategoryId = null;
          }

          // If the specified article is invalid.
          const article = category.articles.find(a => a.id === this.selectedArticleId);
          if (!this.selectedArticleId || category && !article) {
            this.selectedArticleId = null;
          } else {
            this.selectedArticle = article;
          }
        }
      });
    });
  }

  /**
   * Toggles the index sidebar.
   */
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    if (this.isSidebarVisible) {
      this.windowScrollingService.disable();
    } else {
      this.windowScrollingService.enable();
    }
  }

  /**
   * Hides the index sidebar.
   */
  hideSidebar() {
    this.isSidebarVisible = false;
    this.windowScrollingService.enable();
    this.windowScrollingService.scrollToTop();
  }
}
