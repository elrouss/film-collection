import { Component, computed, input } from '@angular/core';

import type { Type, Variant } from './button.types';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  readonly type = input<Type>('button');
  readonly variant = input<Variant>('text');
  readonly disabled = input<boolean>(false);

  protected readonly _className = computed(() => {
    const basic = [
      'py-2',
      'px-3',
      'rounded-sm',
      'uppercase',
      'transition-colors',
      'cursor-pointer',
      'disabled:cursor-not-allowed',
    ];

    switch (this.variant()) {
      case 'contained':
        basic.push(
          'text-neutral-50',
          'bg-blue-500',
          'hover:enabled:bg-blue-600',
          'disabled:bg-blue-400',
        );
        break;
      default:
        basic.push('text-blue-500');
    }

    return basic;
  });
}
