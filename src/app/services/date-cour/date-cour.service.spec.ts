import { TestBed } from '@angular/core/testing';

import { DateCourService } from './date-cour.service';

describe('DateCourService', () => {
  let service: DateCourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateCourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
