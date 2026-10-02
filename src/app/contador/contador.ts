import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contador',
  styleUrl: './contador.scss',
  templateUrl: './contador.html',
})
export class Contador {
  contador = 0;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    if(this.contador > 0) {
      this.contador--;
    } else {
      this.contador = 0;
    }
  }
}
