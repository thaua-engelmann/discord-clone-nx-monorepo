import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./pages/register/register.component').then(c => c.RegisterComponent),
        pathMatch: 'full'
    }
];
