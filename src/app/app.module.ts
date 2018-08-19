import 'prismjs/prism';

import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-powershell';
import 'prismjs/components/prism-typescript';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { NgxMdModule } from 'ngx-md';
import { AppComponent } from './app.component';
import { ArticlesService } from './articles.service';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {WindowScrollingService} from './window-scrolling.service';

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
  { path: '**', component: NotFoundComponent }
];

/**
 * Defines the module of the application.
 */
@NgModule({
  declarations: [
    AppComponent,
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
  providers: [ ArticlesService, WindowScrollingService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
