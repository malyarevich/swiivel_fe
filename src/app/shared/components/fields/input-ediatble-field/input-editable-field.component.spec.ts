import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEditableFieldComponent } from './input-editable-field.component';

describe('InputEditableFieldComponent', () => {
  let component: InputEditableFieldComponent;
  let fixture: ComponentFixture<InputEditableFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputEditableFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEditableFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
