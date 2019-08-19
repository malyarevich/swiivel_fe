import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldContainerComponent } from './input-field-container.component';

describe('InputFieldComponent', () => {
  let component: InputFieldContainerComponent;
  let fixture: ComponentFixture<InputFieldContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFieldContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
