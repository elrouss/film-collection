import { Component, inject } from '@angular/core';

import { LinkComponent } from '../link/link.component';

import { BreadcrumbService } from './breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  imports: [LinkComponent],
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent {
  protected readonly _breadcrumbs = inject(BreadcrumbService).breadcrumbs;
}
