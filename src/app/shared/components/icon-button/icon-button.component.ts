import { Component, computed, input } from '@angular/core';

import { IconComponent } from '../icon/icon.component';

import type { ButtonType } from '../../models/ui.model';

@Component({
  selector: 'app-icon-button',
  imports: [IconComponent],
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent {
  readonly type = input<ButtonType>('button');
  readonly icon = input.required<ReturnType<IconComponent['name']>>();
  // color = input<ReturnType<IconComponent['color']>>('neutral');
  readonly size = input<ReturnType<IconComponent['size']>>('m');
  readonly ariaLabel = input<string>();
  readonly disabled = input<boolean>(false);

  protected readonly _className = computed(() => {
    const base = ['cursor-pointer'];

    return base;
  });
}
