import { TestBed } from '@angular/core/testing';

import { MensajeUsuarioService } from './mensaje-usuario.service';

describe('MensajeUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MensajeUsuarioService = TestBed.get(MensajeUsuarioService);
    expect(service).toBeTruthy();
  });
});
