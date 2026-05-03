import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [BreadcrumbComponent, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.html',
})
export class App {}
