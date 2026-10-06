import { Service } from '@angular/core';

@Service()
export class Banners {

    private banners: string[] = [
        '../../midia/akaza.jpg', 
        '../../midia/hengoko.jpg',
        '../../midia/lua1.png',
        '../../midia/zenitsu.jpg'
    ];

    public getBanners(): string[] {
        return this.banners;
    }

    public getSizeBanners(): number {
        return this.banners.length;
    }
}
