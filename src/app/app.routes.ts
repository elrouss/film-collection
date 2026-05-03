import { Routes } from '@angular/router';

import { ROUTES } from './core/constants/routes';

import { filmdTitleBreadcrumbResolver } from './features/film-details/breadcrumb.resolvers';

export const routes: Routes = [
  {
    path: ROUTES.home,
    data: { breadcrumb: 'Home' },
    title: 'Film Catalogue',
    children: [
      {
        path: '',
        data: { breadcrumb: null },
        loadComponent: () =>
          import('./features/film-catalogue/film-catalogue.component').then(
            (m) => m.FilmCatalogueComponent,
          ),
      },
      {
        path: ROUTES.filmDetails,
        resolve: { breadcrumb: filmdTitleBreadcrumbResolver },
        title: 'Film Details',
        children: [
          {
            path: '',
            data: { breadcrumb: null },
            loadComponent: () =>
              import('./features/film-details/film-details.component').then(
                (m) => m.FilmDetailsComponent,
              ),
          },
        ],
      },
      {
        path: ROUTES.about,
        data: { breadcrumb: 'About' },
        title: 'About',
        children: [
          {
            path: '',
            data: { breadcrumb: null },
            loadComponent: () =>
              import('./features/about/about.component').then((m) => m.AboutComponent),
          },
        ],
      },
    ],
  },
  {
    path: ROUTES.wildcard,
    title: 'Not Found',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
