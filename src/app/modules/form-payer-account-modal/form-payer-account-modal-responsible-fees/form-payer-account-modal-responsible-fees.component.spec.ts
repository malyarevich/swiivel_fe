import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPayerAccountModalResponsibleFeesComponent } from './form-payer-account-modal-responsible-fees.component';

describe('FormPayerAccountModalResponsibleFeesComponent', () => {
  let component: FormPayerAccountModalResponsibleFeesComponent;
  let fixture: ComponentFixture<FormPayerAccountModalResponsibleFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPayerAccountModalResponsibleFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPayerAccountModalResponsibleFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
