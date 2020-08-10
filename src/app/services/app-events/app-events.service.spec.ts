import { TestBed } from '@angular/core/testing';

import { AppEventsService } from './app-events.service';

describe('AppEventsService', () => {
  let service: AppEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
