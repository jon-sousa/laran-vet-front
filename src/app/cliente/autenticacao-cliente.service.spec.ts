import { TestBed } from '@angular/core/testing';

import { AutenticacaoClienteService } from './autenticacao-cliente.service';

describe('AutenticacaoClienteService', () => {
  let service: AutenticacaoClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacaoClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
