import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCatalogueComponent } from './film-catalogue.component';

describe('FilmCatalogueComponent', () => {
  let component: FilmCatalogueComponent;
  let fixture: ComponentFixture<FilmCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmCatalogueComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmCatalogueComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
