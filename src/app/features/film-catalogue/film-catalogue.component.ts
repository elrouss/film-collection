import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  Signal,
} from '@angular/core';

import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { EmptyComponent } from '../../shared/components/empty/empty.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { InputComponent } from '../../shared/components/input/input.component';

import { FilmsService } from '../state/films/films.service';

import { AutofocusDirective } from '../../shared/directives/autofocus/autofocus.directive';

import type { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb.types';
import type { Film } from '../../core/models/film.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-film-catalogue',
  imports: [
    AutofocusDirective,
    BreadcrumbComponent,
    EmptyComponent,
    FilmListComponent,
    InputComponent,
  ],
  templateUrl: './film-catalogue.component.html',
})
export class FilmCatalogueComponent {
  protected readonly _filmsService = inject(FilmsService);
  protected readonly _titleFilter = signal<string>('');

  protected readonly _breadcrumbs: Signal<Breadcrumb[]> = computed(() => [
    {
      label: 'Home',
      url: '/',
    },
  ]);

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
