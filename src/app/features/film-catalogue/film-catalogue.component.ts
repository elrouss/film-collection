import { Component, computed } from '@angular/core';

import { InputComponent } from '../../shared/components/input/input.component';
import { FilmListComponent } from './components/film-list/film-list.component';

import films from '../../../assets/mock/films.json';

@Component({
  selector: 'app-film-catalogue',
  imports: [FilmListComponent, InputComponent],
  templateUrl: './film-catalogue.component.html',
})
export class FilmCatalogueComponent {
  readonly films = computed(() => films);
}
