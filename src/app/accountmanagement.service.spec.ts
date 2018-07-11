import { TestBed, inject } from '@angular/core/testing';

import { AccountmanagementService } from './accountmanagement.service';

describe('AccountmanagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountmanagementService]
    });
  });

  it('should be created', inject([AccountmanagementService], (service: AccountmanagementService) => {
    expect(service).toBeTruthy();
  }));
});
