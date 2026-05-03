import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LinkComponent } from '../link/link.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-footer',
  imports: [LinkComponent],
  templateUrl: './footer.component.html',
  host: {
    class: 'block',
  },
})
export class FooterComponent {}
