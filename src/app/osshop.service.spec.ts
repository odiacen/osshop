import { TestBed } from '@angular/core/testing';

import { OsshopService } from './osshop.service';

describe('OsshopService', () => {
  let service: OsshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
