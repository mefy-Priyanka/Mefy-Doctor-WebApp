import { TestBed, inject } from '@angular/core/testing';

import { DashboarddService } from './dashboardd.service';

describe('DashboarddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboarddService]
    });
  });

  it('should be created', inject([DashboarddService], (service: DashboarddService) => {
    expect(service).toBeTruthy();
  }));
});
