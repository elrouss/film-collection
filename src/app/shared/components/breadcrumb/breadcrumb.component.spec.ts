import { provideRouter } from '@angular/router';
import { ComponentRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let componentRef: ComponentRef<BreadcrumbComponent>;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a single breadcrumb item', async () => {
    componentRef.setInput('items', [{ label: 'Home', url: '/' }]);
    fixture.detectChanges();
    await fixture.whenStable();

    const nav: HTMLElement | null = fixture.nativeElement.querySelector(
      'nav[aria-label="Breadcrumb"]',
    );
    const items = fixture.nativeElement.querySelectorAll('li');

    expect(nav).toBeTruthy();
    expect(items.length).toBe(1);
    expect(items[0].textContent).toContain('Home');
  });

  it('should render multiple breadcrumb items in order', async () => {
    componentRef.setInput('items', [
      { label: 'Home', url: '/' },
      { label: 'Interstellar', url: '/film/1' },
    ]);
    fixture.detectChanges();
    await fixture.whenStable();

    const nav: HTMLElement | null = fixture.nativeElement.querySelector(
      'nav[aria-label="Breadcrumb"]',
    );
    const items = fixture.nativeElement.querySelectorAll('li');

    expect(nav).toBeTruthy();
    expect(items.length).toBe(2);
    expect(items[0].textContent).toContain('Home');
    expect(items[1].textContent).toContain('Interstellar');
  });

  it('should not render breadcrumb navigation when items are empty', async () => {
    componentRef.setInput('items', []);
    fixture.detectChanges();
    await fixture.whenStable();

    const nav: HTMLElement | null = fixture.nativeElement.querySelector(
      'nav[aria-label="Breadcrumb"]',
    );

    expect(nav).toBeFalsy();
  });
});
