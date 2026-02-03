import { Routes } from '@angular/router';
import { postsResolver } from './resolvers/posts.resolver';

export const routes: Routes = [
    {
        path: 'signal-test',
        loadComponent: () => import('./signal-test/signal-test').then(m => m.SignalTest),
        resolve: {postsLoaded: postsResolver}
    },
    {
        path: 'posts/create',
        loadComponent: () => import('./create-post/create-post').then(m => m.CreatePost)
    },
    {
        path: 'posts/:id',
        loadComponent: () => import('./post-details/post-details').then(m => m.PostDetails),
        resolve: {postsLoaded: postsResolver}
    },
    {
        path: '**',
        loadComponent: () => import('./signal-store-test/signal-store-test').then(m => m.SignalStoreTest),
        resolve: {postsLoaded: postsResolver}
    }
];
