import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AppStore } from '../signal-store-test/signal-store/signal-store';

export const postsResolver: ResolveFn<boolean> = () => {
  const store = inject(AppStore);

  if (store.data().length === 0 && !store.loading()) {
    store.loadPosts();
  }

  return true;
};
