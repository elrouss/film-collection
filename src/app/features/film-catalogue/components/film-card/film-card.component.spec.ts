import { ComponentRef } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCardComponent } from './film-card.component';

describe('FilmCardComponent', () => {
  let component: FilmCardComponent;
  let componentRef: ComponentRef<FilmCardComponent>;
  let fixture: ComponentFixture<FilmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmCardComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    componentRef.setInput('id', 1);
    componentRef.setInput('title', 'Interstellar');
    componentRef.setInput('genre', 'Sci-Fi');
    componentRef.setInput('rating', 8.6);
    componentRef.setInput('year', 2014);
    componentRef.setInput('poster', '/');

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
