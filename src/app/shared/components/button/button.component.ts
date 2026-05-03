import { Component, computed, input } from '@angular/core';

import type { ButtonType } from '../../models/ui.model';
import type { Variant } from './button.types';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  readonly type = input<ButtonType>('button');
  readonly variant = input<Variant>('text');
  readonly disabled = input<boolean>(false);

  protected readonly _className = computed(() => {
    const base = [
      'py-2',
      'px-3',
      'rounded-sm',
      'uppercase',
      'transition-colors',
      'duration-300',
      'cursor-pointer',
      'disabled:cursor-not-allowed',
      'focus:outline-none',
      'focus-visible:outline-2',
      'focus-visible:outline-solid',
      'focus-visible:outline-amber-500',
      'focus-visible:outline-offset-4',
    ];

    switch (this.variant()) {
      case 'contained':
        base.push(
          'text-neutral-50',
          'bg-amber-500',
          'hover:enabled:bg-amber-600',
          'disabled:bg-amber-400',
        );
        break;
      default:
        base.push('text-amber-500');
    }

    return base;
  });
}
