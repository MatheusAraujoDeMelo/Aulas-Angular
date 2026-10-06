import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProdutoExibicao } from './produto-exibicao/produto-exibicao';
import { Banners } from './banners/banners';

@Component({
  imports: [RouterOutlet, FormsModule, ProdutoExibicao, Banners],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('hello-world');

  nome = "Matheus Araujo de Melo";
  curso = "Desenvolvimento de Sistemas";
  disciplina = "PPW";
  youtube = "https://www.youtube.com/watch?v=iodg7Ht628s";
  email = "teste@gmail.com";

  apagar() {
    this.nome = "";
    this.curso = "";
    this.disciplina = "";
    this.youtube = "";
    this.email = "";
  }
}
