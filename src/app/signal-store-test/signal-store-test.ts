import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { AppStore } from './signal-store/signal-store';

@Component({
  selector: 'app-signal-store-test',
  imports: [],
  templateUrl: './signal-store-test.html',
  styleUrl: './signal-store-test.scss',
  providers: [AppStore],
})
export class SignalStoreTest implements OnInit {
  private readonly apiService = inject(ApiService);
  readonly appStore = inject(AppStore);

  ngOnInit() {
    this.appStore.loadPosts();
    this.apiService.getPosts().subscribe((posts) => {
      console.log('Fetched posts:', posts);
    });
  }
}
