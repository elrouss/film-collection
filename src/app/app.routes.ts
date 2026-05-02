import { Routes } from '@angular/router';

import { AboutComponent } from './features/about/about.component';
import { FilmCatalogueComponent } from './features/film-catalogue/film-catalogue.component';
import { FilmDetailsComponent } from './features/film-details/film-details.component';

import { ROUTES } from './core/constants/routes';

export const routes: Routes = [
  {
    path: ROUTES.home,
    component: FilmCatalogueComponent,
    title: 'Film Catalogue',
  },
  {
    path: ROUTES.filmDetails,
    component: FilmDetailsComponent,
    title: 'Film Details',
  },
  {
    path: ROUTES.about,
    component: AboutComponent,
    title: 'About',
  },
];
