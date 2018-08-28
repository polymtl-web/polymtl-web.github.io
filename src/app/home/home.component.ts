import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { AuthorsService } from '../authors.service';

/**
 * Defines the component responsible to display the home page.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  authors: Author[];

  /**
   * Initializes a new instance of the HomeComponent class.
   *
   * @param {AuthorsService} authorsService     The authors service to use.
   */
  constructor(private authorsService: AuthorsService) {}

  /**
   * Occurs when the component is initialized.
   */
  ngOnInit(): void {
    this.authorsService.getAuthors().then(authors => this.authors = authors);
  }
}
