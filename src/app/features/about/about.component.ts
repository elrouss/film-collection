import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
