import { TestBed } from '@angular/core/testing';

import { ApexchartsLoaderService } from './apexcharts-loader.service';

describe('ApexchartsLoaderService', () => {
  let service: ApexchartsLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApexchartsLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
