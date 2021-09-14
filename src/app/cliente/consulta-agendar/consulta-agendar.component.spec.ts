import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAgendarComponent } from './consulta-agendar.component';

describe('ConsultaAgendarComponent', () => {
  let component: ConsultaAgendarComponent;
  let fixture: ComponentFixture<ConsultaAgendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaAgendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAgendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
