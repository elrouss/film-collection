import { computed, Injectable, signal, Signal } from '@angular/core';

import filmsMock from '../../../../assets/mock/films.json';

import type { Film } from '../../../core/models/film.model';

interface State {
  data: {
    films: Film[];
    filmById: Omit<Film, 'id'> | null;
  };
}

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private readonly _state = signal<State>({
    data: {
      films: filmsMock,
      filmById: null,
    },
  });

  readonly getFilms = (filters?: { title: string }): Signal<Film[]> =>
    computed(() => {
      const { films } = this._state().data;

      if (!filters) {
        return films;
      }

      const titleFilter = filters.title.toLowerCase();
      return films.filter((film) => film.title.toLowerCase().includes(titleFilter));
    });

  readonly getFavoriteFilms: Signal<Film[]> = computed(() =>
    this._state().data.films.filter((film) => film.isFavorite),
  );

  readonly getFilmById: Signal<Omit<Film, 'id'> | null> = computed(
    () => this._state().data.filmById,
  );

  readonly setFilmById = (id: Film['id']): void => {
    const state = this._state();

    this._state.set({
      ...state.data,
      data: {
        ...state.data,
        filmById: state.data.films.find((film) => film.id === id) ?? null,
      },
    });
  };

  readonly toggleFavoriteStatus = (id: Film['id']): void => {
    const state = this._state();

    this._state.set({
      ...state.data,
      data: {
        ...state.data,
        films: state.data.films.map((film) =>
          film.id === id ? { ...film, isFavorite: !film.isFavorite } : film,
        ),
      },
    });
  };
}
