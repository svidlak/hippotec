import { TestBed, inject } from '@angular/core/testing';

import { FlowersServiceService } from './flowers-service.service';

describe('FlowersServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlowersServiceService]
    });
  });

  it('should be created', inject([FlowersServiceService], (service: FlowersServiceService) => {
    expect(service).toBeTruthy();
  }));
});
