import { Component, inject } from '@angular/core';

import { InputComponent } from '../../shared/components/input/input.component';
import { FilmListComponent } from './components/film-list/film-list.component';

import { FilmsService } from '../state/films/films.service';

@Component({
  selector: 'app-film-catalogue',
  imports: [FilmListComponent, InputComponent],
  templateUrl: './film-catalogue.component.html',
})
export class FilmCatalogueComponent {
  protected readonly _filmsService = inject(FilmsService);
}
