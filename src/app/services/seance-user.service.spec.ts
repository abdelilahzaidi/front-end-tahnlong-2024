import { TestBed } from '@angular/core/testing';

import { SeanceUserService } from './seance-user.service';

describe('SeanceUserService', () => {
  let service: SeanceUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeanceUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
