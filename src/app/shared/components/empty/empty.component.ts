import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { IconComponent } from '../icon/icon.component';

import type { HeadingLevel } from './empty.types';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-empty',
  imports: [IconComponent],
  templateUrl: './empty.component.html',
})
export class EmptyComponent {
  readonly heading = input.required<string>();
  readonly headingLevel = input<HeadingLevel>(2);
  readonly description = input<string>();
  readonly icon = input<ReturnType<IconComponent['name']>>();
}
