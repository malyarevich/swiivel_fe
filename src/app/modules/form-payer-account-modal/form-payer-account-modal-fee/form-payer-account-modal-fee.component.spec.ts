import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPayerAccountModalFeeComponent } from './form-payer-account-modal-fee.component';

describe('FormPayerAccountModalFeeComponent', () => {
  let component: FormPayerAccountModalFeeComponent;
  let fixture: ComponentFixture<FormPayerAccountModalFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPayerAccountModalFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPayerAccountModalFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
