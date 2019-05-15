import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerAccountTransactionsTableComponent } from './payer-account-transactions-table.component';

describe('PayerAccountTransactionsTableComponent', () => {
  let component: PayerAccountTransactionsTableComponent;
  let fixture: ComponentFixture<PayerAccountTransactionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayerAccountTransactionsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayerAccountTransactionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
