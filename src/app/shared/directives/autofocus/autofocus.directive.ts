import { afterNextRender, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective {
  private _el = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    const { nativeElement } = this._el;

    afterNextRender(() => {
      if (nativeElement instanceof HTMLInputElement) {
        nativeElement.focus();
      } else {
        nativeElement.querySelector('input')?.focus();
      }
    });
  }
}
