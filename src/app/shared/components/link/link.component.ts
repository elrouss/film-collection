import { Component, computed, input } from '@angular/core';

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
  readonly ariaCurrent = input<string>();
  readonly isExternal = input<boolean>(false);

  protected readonly _className = computed(() => {
    const base = [
      'inline-flex',
      'items-center',
      'gap-2',
      'py-2',
      'px-3',
      'transition-colors',
      'duration-300',
      'hover:text-amber-500',
      'focus:outline-none',
      'focus-visible:outline-2',
      'focus-visible:outline-solid',
      'focus-visible:outline-amber-500',
    ];

    return base;
  });
}
