import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {} from '@angular/common';

import { IconButtonComponent } from '../../../../shared/components/icon-button/icon-button.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

import type { Film } from '../../../../core/models/film.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-film-card',
  imports: [IconButtonComponent, IconComponent, NgOptimizedImage, RouterLink],
  templateUrl: './film-card.component.html',
})
export class FilmCardComponent {
  readonly id = input.required<Film['id']>();
  readonly title = input.required<Film['title']>();
  readonly genre = input.required<Film['genre']>();
  readonly rating = input.required<Film['rating']>();
  readonly year = input.required<Film['year']>();
  readonly poster = input.required<Film['posterUrl']>();
  readonly isFavorite = input<Film['isFavorite']>(false);
}
