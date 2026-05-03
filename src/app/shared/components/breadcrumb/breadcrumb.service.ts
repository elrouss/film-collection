import { effect, inject, Injectable, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import type { Breadcrumb } from './breadcrumb.types';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);

  private readonly _routerEvents = toSignal(this._router.events);

  readonly breadcrumbs = signal<Breadcrumb[]>([]);

  constructor() {
    effect(
      () => {
        const event = this._routerEvents();

        if (event instanceof NavigationEnd) {
          this.breadcrumbs.set(this._createBreadcrumbs(this._activatedRoute.root));
        }
      },
      { allowSignalWrites: true },
    );
  }

  private _createBreadcrumbs(
    route: ActivatedRoute,
    url = '',
    breadcrumbs: Breadcrumb[] = [],
  ): Breadcrumb[] {
    const { children } = route;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL = child.snapshot.url.map((segment) => segment.path).join('/');

      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      if (routeURL === '') {
        url = '/';
      }

      const { breadcrumb } = child.snapshot.data;

      if (breadcrumb) {
        const label = typeof breadcrumb === 'string' ? breadcrumb : '';
        breadcrumbs.push({ label, url });
      }

      return this._createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
