import { TestBed } from '@angular/core/testing';

import { ShiftHoursService } from './shift-hours.service';

describe('ShiftHoursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShiftHoursService = TestBed.get(ShiftHoursService);
    expect(service).toBeTruthy();
  });
});
