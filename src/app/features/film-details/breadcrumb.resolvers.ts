import { inject } from '@angular/core';
import type { ResolveFn } from '@angular/router';

import { FilmsService } from '../state/films/films.service';

export const filmdTitleBreadcrumbResolver: ResolveFn<string> = (route) => {
  const filmsService = inject(FilmsService);
  const filmId = route.paramMap.get('filmId');
  const TITLE_PLACEHOLDER = 'Film Details';

  if (!filmId) {
    return TITLE_PLACEHOLDER;
  }

  const filmTitle = filmsService.getFilmById2(Number(filmId))()?.title;
  return filmTitle || TITLE_PLACEHOLDER;
};
