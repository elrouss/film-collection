import { Component, computed, input } from '@angular/core';

import { IconComponent } from '../icon/icon.component';

import type { ButtonType } from '../../models/ui.model';

@Component({
  selector: 'app-icon-button',
  imports: [IconComponent],
  templateUrl: './icon-button.component.html',
  host: {
    class: 'inline-flex',
  },
})
export class IconButtonComponent {
  readonly type = input<ButtonType>('button');
  readonly icon = input.required<ReturnType<IconComponent['name']>>();
  readonly size = input<ReturnType<IconComponent['size']>>('m');
  readonly ariaLabel = input<string>();
  readonly withBg = input<boolean>(false);
  readonly disabled = input<boolean>(false);

  protected readonly _className = computed(() => {
    const base = [
      'inline-flex',
      'justify-center',
      'items-center',
      'aspect-square',
      'transition-colors',
      'duration-300',
      'cursor-pointer',
      'hover:text-amber-500',
      'focus:outline-none',
      'focus-visible:outline-2',
      'focus-visible:outline-solid',
      'focus-visible:outline-amber-500',
      'focus-visible:outline-offset-4',
    ];

    switch (this.size()) {
      case 'l':
        base.push('w-[44px]');
        break;
      case 'm':
        base.push('w-[40px]');
        break;
      case 's':
        base.push('w-36px');
        break;
      default:
    }

    if (this.withBg()) {
      base.push('rounded-full', 'bg-neutral-500/80');
    }

    return base;
  });
}
