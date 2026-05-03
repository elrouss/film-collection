import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-burger',
  imports: [],
  templateUrl: './burger.component.html',
  host: {
    class: 'inline-flex',
  },
})
export class BurgerComponent {
  readonly pressed = input<boolean>(false);

  protected readonly _className = computed(() => {
    const base = [
      'group',
      'inline-flex',
      'flex-col',
      'justify-between',
      'w-8',
      'h-6',
      'cursor-pointer',
      'focus-visible:outline-2',
      'focus-visible:outline-solid',
      'focus-visible:outline-amber-500',
      'focus-visible:outline-offset-4',
    ];

    if (this.pressed()) {
      base.push(
        '[&>span]:first:[transform:translateY(10px)_rotate(45deg)]',
        '[&>span]:even:opacity-0',
        '[&>span]:last:[transform:translateY(-10px)_rotate(-45deg)]',
      );
    }

    return base;
  });
}
