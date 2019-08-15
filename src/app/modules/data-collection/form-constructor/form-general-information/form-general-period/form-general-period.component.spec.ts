import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeneralPeriodComponent } from './form-general-period.component';

describe('FormGeneralPeriodComponent', () => {
  let component: FormGeneralPeriodComponent;
  let fixture: ComponentFixture<FormGeneralPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGeneralPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGeneralPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
