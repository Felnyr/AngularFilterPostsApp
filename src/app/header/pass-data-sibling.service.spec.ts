import { TestBed } from '@angular/core/testing';

import { PassDataSiblingService } from './pass-data-sibling.service';

describe('PassDataSiblingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassDataSiblingService = TestBed.get(PassDataSiblingService);
    expect(service).toBeTruthy();
  });
});
