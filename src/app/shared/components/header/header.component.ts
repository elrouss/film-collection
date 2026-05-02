import { Component } from '@angular/core';

import { LinkComponent } from '../link/link.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  imports: [LinkComponent, LogoComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
