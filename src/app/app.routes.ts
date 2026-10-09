import { Routes } from '@angular/router';
import { Noticias } from './noticias/noticias';
import { Banners } from './banners/banners';

export const routes: Routes = [
    { path: '', component: Banners },   
    { path: 'noticias', component: Noticias },
];
