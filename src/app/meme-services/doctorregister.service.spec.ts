import { TestBed, inject } from '@angular/core/testing';

import { DoctorregisterService } from './doctorregister.service';

describe('DoctorregisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorregisterService]
    });
  });

  it('should be created', inject([DoctorregisterService], (service: DoctorregisterService) => {
    expect(service).toBeTruthy();
  }));
});
