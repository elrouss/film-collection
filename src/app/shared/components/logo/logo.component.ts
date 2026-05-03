import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-logo',
  imports: [IconComponent, RouterLink],
  templateUrl: './logo.component.html',
})
export class LogoComponent {}
