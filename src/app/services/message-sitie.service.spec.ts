import { TestBed } from '@angular/core/testing';

import { MessageSitieService } from './message-sitie.service';

describe('MessageSitieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageSitieService = TestBed.get(MessageSitieService);
    expect(service).toBeTruthy();
  });
});
