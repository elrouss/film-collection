import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { DecimalPipe, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

import { IconButtonComponent } from '../../../../shared/components/icon-button/icon-button.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

import type { Film } from '../../../../core/models/film.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-film-card',
  imports: [DecimalPipe, IconButtonComponent, IconComponent, NgOptimizedImage, RouterLink],
  templateUrl: './film-card.component.html',
  host: {
    class: 'block h-full',
  },
})
export class FilmCardComponent {
  readonly id = input.required<Film['id']>();
  readonly title = input.required<Film['title']>();
  readonly genre = input.required<Film['genre']>();
  readonly rating = input.required<Film['rating']>();
  readonly year = input.required<Film['year']>();
  readonly poster = input.required<Film['posterUrl']>();
  readonly isFavorite = input<Film['isFavorite']>(false);

  readonly toggleFavoriteStatus = output<Film['id']>();

  protected readonly _onToggleFavoriteStatus = (id: Film['id']): void => {
    this.toggleFavoriteStatus.emit(id);
  };
}
