import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerAccountFeesTableComponent } from './payer-account-fees-table.component';

describe('PayerAccountFeesTableComponent', () => {
  let component: PayerAccountFeesTableComponent;
  let fixture: ComponentFixture<PayerAccountFeesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayerAccountFeesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayerAccountFeesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
