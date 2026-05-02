import { Component, inject, signal } from '@angular/core';

import { InputComponent } from '../../shared/components/input/input.component';
import { FilmListComponent } from './components/film-list/film-list.component';

import { FilmsService } from '../state/films/films.service';

import { AutofocusDirective } from '../../shared/directives/autofocus/autofocus.directive';

@Component({
  selector: 'app-film-catalogue',
  imports: [AutofocusDirective, FilmListComponent, InputComponent],
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
}
