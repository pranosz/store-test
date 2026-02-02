import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Post } from '../../models/post.dto';
import { ApiService } from '../../api/api.service';
import { computed, inject } from '@angular/core';
import { pipe, switchMap, tap } from 'rxjs';

interface AppState {
    data: Post[];
    count: number;
    loading: boolean;
    error: string | null;
}

const initialState: AppState = {
    data: [],
    count: 0,
    loading: false,
    error: null,
};

export const AppStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods(store => {
        const apiService = inject(ApiService);
        return {
            loadPosts: rxMethod<void>(
                pipe(
                tap(() =>
                    patchState(store, { loading: true, error: null })
                ),
                switchMap(() => apiService.fetchPosts()),
                tap({
                    next: (posts) =>
                    patchState(store, { data: posts, loading: false }),
                    error: (err) =>
                    patchState(store, {
                        error: err.message,
                        loading: false,
                    }),
                })
                )
            ),
            fetchPostById: rxMethod<number>(
                pipe(
                tap(() =>
                    patchState(store, { loading: true, error: null })
                ),
                switchMap((postId) => apiService.fetchPostById(postId)),
                tap({
                    next: (post) =>
                    patchState(store, { data: [post], loading: false }),
                    error: (err) =>
                    patchState(store, {
                        error: err.message,
                        loading: false,
                    }),
                })
                )
            ),
            updatePostById(postId: number, updatedPost: Partial<Post>) {
                patchState(store, {
                    data: store.data().map(post => post.id === postId ? { ...post, ...updatedPost } : post),
                    count: store.data().length,
                });
            },
            getPostById: (id: number) => computed(() => {
                console.log('store---: ', store.data());
                return store.data().find(p => p.id === id) ?? null}),
        }
    }),

);