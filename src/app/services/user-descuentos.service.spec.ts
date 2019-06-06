import { TestBed } from '@angular/core/testing';

import { UserDescuentosService } from './user-descuentos.service';

describe('UserDescuentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDescuentosService = TestBed.get(UserDescuentosService);
    expect(service).toBeTruthy();
  });
});
