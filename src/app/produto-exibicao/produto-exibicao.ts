import { Component, Signal, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-produto-exibicao',
  styleUrl: './produto-exibicao.scss',
  templateUrl: './produto-exibicao.html',
})
export class ProdutoExibicao {
  urlImagem: string = '../../img/img1.png';
  descricaoImagem: string = "Pipoca amanteigada";
  titulo: string  = "Pipoca Amanteigada top nota 10";
  descricaoProduto: string = "Pipoca amanteigada do pica pau";
  isFavorito: Signal<boolean> = signal(false);

  toggleFavorito() {
    this.isFavorito = signal(!this.isFavorito());
  }
}
