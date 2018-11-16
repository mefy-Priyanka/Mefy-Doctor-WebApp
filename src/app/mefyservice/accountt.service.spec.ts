import { TestBed, inject } from '@angular/core/testing';

import { AccounttService } from './accountt.service';

describe('AccounttService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccounttService]
    });
  });

  it('should be created', inject([AccounttService], (service: AccounttService) => {
    expect(service).toBeTruthy();
  }));
});
