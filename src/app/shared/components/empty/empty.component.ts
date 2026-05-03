import { Component, input } from '@angular/core';

import { IconComponent } from '../icon/icon.component';

import type { HeadingLevel } from './empty.types';

@Component({
  selector: 'app-empty',
  imports: [IconComponent],
  templateUrl: './empty.component.html',
})
export class EmptyComponent {
  heading = input.required<string>();
  headingLevel = input<HeadingLevel>(2);
  description = input<string>();
  icon = input<ReturnType<IconComponent['name']>>();
}
