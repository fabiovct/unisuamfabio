import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicacoesComponent } from './indicacoes.component';

describe('IndicacoesComponent', () => {
  let component: IndicacoesComponent;
  let fixture: ComponentFixture<IndicacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
