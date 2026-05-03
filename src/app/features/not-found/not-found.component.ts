import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-not-found',
  imports: [ButtonComponent],
  templateUrl: './not-found.component.html',
  host: {
    class: 'flex flex-col h-full',
  },
})
export class NotFoundComponent {
  private readonly _router = inject(Router);

  protected readonly _navigateToHome = (): void => {
    this._router.navigateByUrl('/');
  };
}
