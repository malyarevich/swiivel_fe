import { TestBed } from '@angular/core/testing';

import { TuitionStateService } from './tuition-state.service';

describe('TuitionStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TuitionStateService = TestBed.get(TuitionStateService);
    expect(service).toBeTruthy();
  });
});
