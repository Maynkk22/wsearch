import { TestBed } from '@angular/core/testing';

import { WsearchService } from './wsearch.service';

describe('WsearchService', () => {
  let service: WsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
