import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeneralEligibleComponent } from './form-general-eligible.component';

describe('FormGeneralEligibleComponent', () => {
  let component: FormGeneralEligibleComponent;
  let fixture: ComponentFixture<FormGeneralEligibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGeneralEligibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGeneralEligibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
