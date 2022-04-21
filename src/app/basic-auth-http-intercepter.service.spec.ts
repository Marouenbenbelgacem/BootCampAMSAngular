import { TestBed } from '@angular/core/testing';

import { BasicAuthHttpIntercepterService } from './basic-auth-http-intercepter.service';

describe('BasicAuthHttpIntercepterService', () => {
  let service: BasicAuthHttpIntercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthHttpIntercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
