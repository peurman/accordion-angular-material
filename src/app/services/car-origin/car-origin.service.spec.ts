import { TestBed } from '@angular/core/testing';

import { CarOriginService } from './car-origin.service';

describe('CarOriginService', () => {
  let service: CarOriginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarOriginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
