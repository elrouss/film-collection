import { ComponentRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let componentRef: ComponentRef<ButtonComponent>;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has attribute "type"', () => {
    componentRef.setInput('type', 'button');
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('[data-test-id]'));
    expect(buttonElement.nativeElement.getAttribute('type')).toBe('button');
  });

  it('has attribute "disabled"', () => {
    componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('[data-test-id]'));
    expect(buttonElement.nativeElement.getAttribute('disabled')).toBe('');
  });
});
