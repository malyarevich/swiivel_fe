import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMultiCheckboxFieldComponent } from './select-multi-checkbox-field.component';

describe('SelectMultiCheckboxFieldComponent', () => {
  let component: SelectMultiCheckboxFieldComponent;
  let fixture: ComponentFixture<SelectMultiCheckboxFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMultiCheckboxFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMultiCheckboxFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
