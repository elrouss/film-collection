import { Component, inject, input, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { EmptyComponent } from '../../shared/components/empty/empty.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

import { FilmsService } from '../state/films/films.service';

import { DurationPipe } from '../../shared/pipes/duration/duration-pipe';

@Component({
  selector: 'app-film-details',
  imports: [DurationPipe, EmptyComponent, IconComponent, NgOptimizedImage],
  templateUrl: './film-details.component.html',
})
export class FilmDetailsComponent implements OnInit {
  protected readonly filmId = input.required<string>();

  protected readonly _filmsService = inject(FilmsService);

  ngOnInit(): void {
    const filmId = this.filmId();
    this._filmsService.setFilmById(Number(filmId));
  }
}
