import { ChangeDetectionStrategy, Component, computed, Signal } from '@angular/core';

import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

import { ROUTES } from '../../core/constants/routes';

import type { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb.types';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-about',
  imports: [BreadcrumbComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  protected readonly _breadcrumbs: Signal<Breadcrumb[]> = computed(() => [
    {
      label: 'About',
      url: `/${ROUTES.about}`,
    },
  ]);
}
