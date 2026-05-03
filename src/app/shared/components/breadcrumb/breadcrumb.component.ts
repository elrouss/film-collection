import { Component, computed, inject } from '@angular/core';

import { LinkComponent } from '../link/link.component';

import { BreadcrumbService } from './breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  imports: [LinkComponent],
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent {
  protected readonly _breadcrumbs = inject(BreadcrumbService).breadcrumbs;

  protected readonly _className = computed(() => {
    const base = ['overflow-auto', 'px-2', 'py-1', '-ms-5', 'whitespace-nowrap'];

    if (this._breadcrumbs().length === 0) {
      base.push('hidden');
    }

    return base;
  });
}
