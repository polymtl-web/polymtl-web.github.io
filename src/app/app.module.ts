import 'prismjs/prism';

import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-typescript';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { NgxMdModule } from 'ngx-md';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ArticlesService } from './articles.service';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

/**
 * The routes of the application.
 */
const appRoutes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'tutoriels', component: ArticlesComponent },
  { path: 'tutoriels/:category/:article', component: ArticlesComponent },
  { path: 'guide', component: ArticlesComponent },
  { path: 'guide/:category/:article', component: ArticlesComponent },
  { path: 'a-propos', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];

/**
 * Defines the module of the application.
 */
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ArticlesComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgxMdModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
