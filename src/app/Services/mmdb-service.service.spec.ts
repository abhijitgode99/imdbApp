import { TestBed } from '@angular/core/testing';

import { MmdbServiceService } from './mmdb-service.service';

describe('MmdbServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MmdbServiceService = TestBed.get(MmdbServiceService);
    expect(service).toBeTruthy();
  });
});
