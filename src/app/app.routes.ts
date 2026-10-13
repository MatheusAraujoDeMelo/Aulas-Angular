import { Routes } from '@angular/router';
import { Home } from './view/home/home';
import { Banners } from './banners/banners';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'banners', component: Banners }
];
