import { TestBed, inject } from '@angular/core/testing';

import { DoctorPrescriptionService } from './doctor-prescription.service';

describe('DoctorPrescriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorPrescriptionService]
    });
  });

  it('should be created', inject([DoctorPrescriptionService], (service: DoctorPrescriptionService) => {
    expect(service).toBeTruthy();
  }));
});
