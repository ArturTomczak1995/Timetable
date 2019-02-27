import { TestBed } from '@angular/core/testing';

import { CalendarDatesService } from './calendar-dates.service';

describe('CalendarDatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalendarDatesService = TestBed.get(CalendarDatesService);
    expect(service).toBeTruthy();
  });
});
