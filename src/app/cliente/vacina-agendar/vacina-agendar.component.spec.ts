import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinaAgendarComponent } from './vacina-agendar.component';

describe('VacinaAgendarComponent', () => {
  let component: VacinaAgendarComponent;
  let fixture: ComponentFixture<VacinaAgendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinaAgendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinaAgendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
