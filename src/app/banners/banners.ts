import { Component } from '@angular/core';
import { Banners as banner } from '../servicos/banners';

@Component({
  imports: [],
  selector: 'app-banners',
  styleUrl: './banners.scss',
  templateUrl: './banners.html',
})
export class Banners {

  banners = new banner();
  bannerLista: string[] = this.banners.getBanners();

  bannerAtual: number = 0;

  prevBanner() {
    if (this.bannerAtual > 0) {
      this.bannerAtual--;
    } else {
      this.bannerAtual = this.banners.getSizeBanners() - 1;
    }
  }

  nextBanner() {
    if(this.bannerAtual < this.banners.getSizeBanners() - 1) {
      this.bannerAtual++;
    } else {
      this.bannerAtual = 0;
    }
  }
}
