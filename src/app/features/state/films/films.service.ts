import { computed, Injectable, signal, Signal } from '@angular/core';

import filmsMock from '../../../../assets/mock/films.json';

import type { Film } from '../../../core/models/film.model';

interface State {
  films: Film[];
}

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private readonly _state = signal<State>({
    films: filmsMock,
  });

  readonly getFilms = (filters?: { title: string }): Film[] => {
    const { films } = this._state();

    if (!filters) {
      return films;
    }

    const titleFilter = filters.title.toLowerCase();
    return films.filter((film) => film.title.toLowerCase().includes(titleFilter));
  };

  readonly getFavoriteFilms: Signal<Film[]> = computed(() =>
    this._state().films.filter((film) => film.isFavorite),
  );

  readonly getFilmById = (id: Film['id']): Film | undefined =>
    this._state().films.find((film) => film.id === id);

  readonly toggleFavoriteStatus = (id: Film['id']): void => {
    const state = this._state();

    this._state.set({
      films: state.films.map((film) =>
        film.id === id ? { ...film, isFavorite: !film.isFavorite } : film,
      ),
    });
  };
}
