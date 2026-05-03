import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  effect,
  inject,
  Renderer2,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { BurgerComponent } from '../burger/burger.component';
import { LinkComponent } from '../link/link.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  imports: [BurgerComponent, LinkComponent, LogoComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private readonly _document = inject(DOCUMENT);
  private readonly _renderer = inject(Renderer2);

  protected readonly _pressedBurger = signal<boolean>(false);

  constructor() {
    const isMd = window.matchMedia('(min-width: 768px)');

    isMd.addEventListener('change', (event) => {
      if (event.matches && this._pressedBurger()) {
        this._pressedBurger.set(false);
      }
    });

    effect(() => {
      const hostElement = this._document.documentElement;

      if (this._pressedBurger()) {
        this._renderer.addClass(hostElement, 'overflow-y-hidden');
      } else {
        this._renderer.removeClass(hostElement, 'overflow-y-hidden');
      }
    });
  }

  protected _toggleBurger = (): void => {
    this._pressedBurger.update((prev) => !prev);
  };

  protected _navigateByLink = (rla: RouterLinkActive): void => {
    if (rla.isActive) {
      return;
    }

    this._pressedBurger.set(false);
  };
}
