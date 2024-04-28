import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/portfolio/pages/home/home.component').then(
        mod => mod.HomeComponent
      ),
  },
];
