import { TestBed, inject } from '@angular/core/testing';

import { DocregistrationService } from './docregistration.service';

describe('DocregistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocregistrationService]
    });
  });

  it('should be created', inject([DocregistrationService], (service: DocregistrationService) => {
    expect(service).toBeTruthy();
  }));
});
