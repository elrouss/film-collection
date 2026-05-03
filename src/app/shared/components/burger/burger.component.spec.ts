import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerComponent } from './burger.component';

describe('BurgerComponent', () => {
  let component: BurgerComponent;
  let fixture: ComponentFixture<BurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BurgerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
