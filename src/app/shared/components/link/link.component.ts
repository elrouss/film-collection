import { Component, input } from '@angular/core';

import { IconComponent } from '../icon/icon.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-link',
  imports: [IconComponent, RouterLink, RouterLinkActive],
  templateUrl: './link.component.html',
  host: {
    class: 'inline-flex',
  },
})
export class LinkComponent {
  readonly href = input<string>();
  readonly routerLink = input<string>();
  readonly text = input<string>();
  readonly icon = input<ReturnType<IconComponent['name']>>();
  readonly isExternal = input<boolean>(false);
}
