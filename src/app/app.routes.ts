import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'signal-test',
        loadComponent: () => import('./signal-test/signal-test').then(m => m.SignalTest)
    },
    {
        path: 'posts/:id',
        loadComponent: () => import('./post-details/post-details').then(m => m.PostDetails)
    },
    {
        path: '**',
        loadComponent: () => import('./signal-store-test/signal-store-test').then(m => m.SignalStoreTest)
    }
];
