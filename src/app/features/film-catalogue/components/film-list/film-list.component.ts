import { Component, input } from '@angular/core';

import { FilmCardComponent } from '../film-card/film-card.component';

import type { Film } from '../../../../core/models/film.model';

@Component({
  selector: 'app-film-list',
  imports: [FilmCardComponent],
  templateUrl: './film-list.component.html',
  host: {
    class: 'block',
  },
})
export class FilmListComponent {
  readonly films = input<Film[]>([]);
}
