import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoExibicao } from './produto-exibicao';

describe('ProdutoExibicao', () => {
  let component: ProdutoExibicao;
  let fixture: ComponentFixture<ProdutoExibicao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoExibicao],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoExibicao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
