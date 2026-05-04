import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { LinkComponent } from '../link/link.component';

import type { Breadcrumb } from './breadcrumb.types';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-breadcrumb',
  imports: [LinkComponent],
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent {
  readonly items = input<Breadcrumb[]>([]);

  protected readonly _className = computed(() => {
    const base = ['overflow-auto', 'px-2', 'py-1', '-ms-5', 'whitespace-nowrap'];

    if (this.items().length === 0) {
      base.push('hidden');
    }

    return base;
  });
}
