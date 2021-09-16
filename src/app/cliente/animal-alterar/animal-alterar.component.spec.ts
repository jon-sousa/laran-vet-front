import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAlterarComponent } from './animal-alterar.component';

describe('AnimalAlterarComponent', () => {
  let component: AnimalAlterarComponent;
  let fixture: ComponentFixture<AnimalAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
