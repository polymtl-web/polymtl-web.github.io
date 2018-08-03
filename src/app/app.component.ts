import { Component } from '@angular/core';

/**
 * Defines the main component of the application.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMenuVisible = false;

  /**
   * Toggles the nav menu.
   */
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  /**
   * Hides the nav menu.
   */
  hideMenu() {
    this.isMenuVisible = false;
  }
}
