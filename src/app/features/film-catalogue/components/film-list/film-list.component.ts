import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { FilmCardComponent } from '../film-card/film-card.component';

import type { Film } from '../../../../core/models/film.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-film-list',
  imports: [FilmCardComponent],
  templateUrl: './film-list.component.html',
  host: {
    class: 'block',
  },
})
export class FilmListComponent {
  readonly films = input<Film[]>([]);

  readonly toggleFavoriteStatus = output<Film['id']>();

  protected readonly _onToggleFavoriteStatus = (filmId: Film['id']): void => {
    this.toggleFavoriteStatus.emit(filmId);
  };
}
