import { Component, computed, input } from '@angular/core';

import type { IconName, IconSize } from './icon.types';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  standalone: true,
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly size = input<IconSize>('m');

  protected readonly _className = computed(() => {
    const base = ['aspect-square'];

    switch (this.size()) {
      case 'xl':
        base.push('w-[40px]');
        break;
      case 'l':
        base.push('w-[28px]');
        break;
      case 's':
        base.push('w-[20px]');
        break;
      default:
        base.push('w-[24px]');
    }

    return base;
  });

  private readonly _spritePath = '@/assets/icons/sprite.svg';

  get href(): string {
    return `${this._spritePath}#${this.name()}`;
  }
}
