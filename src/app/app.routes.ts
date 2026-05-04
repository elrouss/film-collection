import { Routes } from '@angular/router';

import { ROUTES } from './core/constants/routes';

export const routes: Routes = [
  {
    path: ROUTES.home,
    loadComponent: () =>
      import('./features/film-catalogue/film-catalogue.component').then(
        (m) => m.FilmCatalogueComponent,
      ),
    title: 'Film Catalogue',
  },
  {
    path: ROUTES.filmDetails,
    loadComponent: () =>
      import('./features/film-details/film-details.component').then((m) => m.FilmDetailsComponent),
    title: 'Film Details',
  },
  {
    path: ROUTES.about,
    title: 'About',
    loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: ROUTES.wildcard,
    title: 'Not Found',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
