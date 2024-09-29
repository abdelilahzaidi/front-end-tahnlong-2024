import { TestBed } from '@angular/core/testing';

import { EventListUserService } from './event-list-user.service';

describe('EventListUserService', () => {
  let service: EventListUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventListUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
