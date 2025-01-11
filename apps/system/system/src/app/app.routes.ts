import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent),
        pathMatch: 'full'
    }
];
