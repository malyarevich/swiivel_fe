import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeneralDatesComponent } from './form-general-dates.component';

describe('FormGeneralDatesComponent', () => {
  let component: FormGeneralDatesComponent;
  let fixture: ComponentFixture<FormGeneralDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGeneralDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGeneralDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
