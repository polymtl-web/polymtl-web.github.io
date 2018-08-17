import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

/**
 * Defines the service responsible to manager to window scrolling.
 */
@Injectable()
export class WindowScrollingService {
  private renderer: Renderer2;

  /**
   * Initializes a new instance of the WindowScrollingService class.
   *
   * @param {Document} document                     The document associated with the web page.
   * @param {RendererFactory2} rendererFactory      The factory to use to create a renderer.
   */
  constructor(@Inject(DOCUMENT) private document: Document, rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  /**
   * Disables the window scrolling.
   */
  disabled() {
    this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
  }

  /**
   * Enables the window scrolling.
   */
  enable() {
    this.renderer.setStyle(this.document.body, 'overflow', 'auto');
  }
}
