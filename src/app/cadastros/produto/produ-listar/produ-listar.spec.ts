import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduListar } from './produ-listar';

describe('ProduListar', () => {
  let component: ProduListar;
  let fixture: ComponentFixture<ProduListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
