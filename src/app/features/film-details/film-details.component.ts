import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { EmptyComponent } from '../../shared/components/empty/empty.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { LinkComponent } from '../../shared/components/link/link.component';

import { FilmsService } from '../state/films/films.service';

import { DurationPipe } from '../../shared/pipes/duration/duration-pipe';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-film-details',
  imports: [DurationPipe, EmptyComponent, IconComponent, LinkComponent, NgOptimizedImage],
  templateUrl: './film-details.component.html',
})
export class FilmDetailsComponent {
  protected readonly _filmsService = inject(FilmsService);

  protected readonly filmId = input.required<string>();
  protected readonly _currentFilm = computed(() =>
    this._filmsService.getFilmById(Number(this.filmId())),
  );
}
