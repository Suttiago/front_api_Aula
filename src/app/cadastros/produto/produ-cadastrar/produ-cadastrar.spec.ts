import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduCadastrar } from './produ-cadastrar';

describe('ProduCadastrar', () => {
  let component: ProduCadastrar;
  let fixture: ComponentFixture<ProduCadastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduCadastrar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduCadastrar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
