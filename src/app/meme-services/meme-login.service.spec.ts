import { TestBed, inject } from '@angular/core/testing';

import { MemeLoginService } from './meme-login.service';

describe('MemeLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemeLoginService]
    });
  });

  it('should be created', inject([MemeLoginService], (service: MemeLoginService) => {
    expect(service).toBeTruthy();
  }));
});
