import { TestBed } from '@angular/core/testing';

import { PaymentMethodsService } from './person.service';

describe('PersonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentMethodsService = TestBed.get(PaymentMethodsService);
    expect(service).toBeTruthy();
  });
});
