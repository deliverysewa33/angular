import { TestBed, inject } from '@angular/core/testing';

import { CreateCustomerService } from './create-customer.service';

describe('CreateCustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateCustomerService]
    });
  });

  it('should be created', inject([CreateCustomerService], (service: CreateCustomerService) => {
    expect(service).toBeTruthy();
  }));
});
