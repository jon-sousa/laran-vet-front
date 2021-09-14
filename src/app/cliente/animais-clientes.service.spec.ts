import { TestBed } from '@angular/core/testing';

import { AnimaisClientesService } from './animais-clientes.service';

describe('AnimaisClientesService', () => {
  let service: AnimaisClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimaisClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
