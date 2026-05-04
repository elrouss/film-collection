import { ComponentRef } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailsComponent } from './film-details.component';

describe('FilmDetailsComponent', () => {
  let component: FilmDetailsComponent;
  let componentRef: ComponentRef<FilmDetailsComponent>;
  let fixture: ComponentFixture<FilmDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmDetailsComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmDetailsComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    componentRef.setInput('filmId', '1');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct film', async () => {
    componentRef.setInput('filmId', '8');

    fixture.detectChanges();
    await fixture.whenStable();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector('[data-test="title"]')?.textContent?.trim()).toBe(
      'The Lord of the Rings: The Return of the King (2003)',
    );
    expect(el.querySelector('[data-test="year"]')?.textContent).toBe('(2003)');
    expect(el.querySelector('[data-test="genre"]')?.textContent).toBe('Fantasy');
    expect(el.querySelector('[data-test="duration"]')?.textContent).toBe('3h 21min');
    expect(el.querySelector('[data-test="rating"]')?.textContent?.trim()).toBe('9.0');
    expect(el.querySelector('[data-test="description"]')?.textContent).toContain(
      'The final battle for Middle-earth begins',
    );
    expect((el.querySelector('[data-test="poster"]') as HTMLImageElement)?.src).toContain(
      'https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMt',
    );
  });
});
