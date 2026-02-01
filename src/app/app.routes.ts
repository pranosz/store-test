import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'signal-test',
        loadComponent: () => import('./signal-test/signal-test').then(m => m.SignalTest)
    },
        {
        path: '**',
        loadComponent: () => import('./signal-store-test/signal-store-test').then(m => m.SignalStoreTest)
    }
];
