import { TestBed } from '@angular/core/testing';

import { AppSecureService } from './app-secure.service';

describe('AppSecureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppSecureService = TestBed.get(AppSecureService);
    expect(service).toBeTruthy();
  });
});
