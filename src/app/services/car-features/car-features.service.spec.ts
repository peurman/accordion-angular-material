import { TestBed } from '@angular/core/testing';

import { CarFeaturesService } from './car-features.service';

describe('CarFeaturesService', () => {
  let service: CarFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
