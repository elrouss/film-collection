import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { EmptyComponent } from '../../shared/components/empty/empty.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { InputComponent } from '../../shared/components/input/input.component';

import { FilmsService } from '../state/films/films.service';

import { AutofocusDirective } from '../../shared/directives/autofocus/autofocus.directive';

import type { Film } from '../../core/models/film.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-film-catalogue',
  imports: [AutofocusDirective, EmptyComponent, FilmListComponent, InputComponent],
  templateUrl: './film-catalogue.component.html',
})
export class FilmCatalogueComponent {
  protected readonly _filmsService = inject(FilmsService);
  protected readonly _titleFilter = signal<string>('');

  protected readonly _searchFilmByTitle = ({ target }: Event): void => {
    if (!(target instanceof HTMLInputElement)) {
      return;
    }

    this._titleFilter.set(target.value);
  };

  protected readonly _toggleFilmFavoriteStatus = (filmId: Film['id']): void => {
    this._filmsService.toggleFavoriteStatus(filmId);
  };
}
