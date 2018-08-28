import { Component } from '@angular/core';
import { ArticlesComponent } from './articles/articles.component';

/**
 * Defines the main component of the application.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentComponent: any;
  isOnArticlesPage = true;

  /**
   * Occurs when the router outlet is activated.
   *
   * @param component   The component activated in the router outlet.
   */
  onRouterOutletActivate(component) {
    this.isOnArticlesPage = component instanceof ArticlesComponent;
    this.currentComponent = component;
  }

  /**
   * Toggles the sidebar (on articles page).
   */
  toggleSidebar() {
    if (this.currentComponent && this.currentComponent instanceof ArticlesComponent) {
      this.currentComponent.toggleSidebar();
    }
  }
}
