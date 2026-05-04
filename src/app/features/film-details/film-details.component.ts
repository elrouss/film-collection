import { ChangeDetectionStrategy, Component, computed, inject, input, Signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { EmptyComponent } from '../../shared/components/empty/empty.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { LinkComponent } from '../../shared/components/link/link.component';

import { FilmsService } from '../state/films/films.service';

import { DurationPipe } from '../../shared/pipes/duration/duration-pipe';

import type { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb.types';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-film-details',
  imports: [
    BreadcrumbComponent,
    DurationPipe,
    EmptyComponent,
    IconComponent,
    LinkComponent,
    NgOptimizedImage,
  ],
  templateUrl: './film-details.component.html',
})
export class FilmDetailsComponent {
  protected readonly _filmsService = inject(FilmsService);

  protected readonly filmId = input.required<string>();
  protected readonly _currentFilm = computed(() =>
    this._filmsService.getFilmById(Number(this.filmId())),
  );

  protected readonly _breadcrumbs: Signal<Breadcrumb[]> = computed(() => [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: this._currentFilm()?.title || 'Unknown Film',
      url: `/film/${this.filmId()}`,
    },
  ]);
}
