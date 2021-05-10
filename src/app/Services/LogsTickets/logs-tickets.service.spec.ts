import { TestBed } from '@angular/core/testing';

import { LogsTicketsService } from './logs-tickets.service';

describe('LogsTicketsService', () => {
  let service: LogsTicketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogsTicketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
