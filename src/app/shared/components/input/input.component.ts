import { Component, input } from '@angular/core';

import { IconComponent } from '../icon/icon.component';

import type { InputType } from './input.types';

@Component({
  selector: 'app-input',
  imports: [IconComponent],
  templateUrl: './input.component.html',
})
export class InputComponent {
  readonly type = input<InputType>('text');
  readonly placeholder = input<string>();
  readonly icon = input<ReturnType<IconComponent['name']>>();
}
