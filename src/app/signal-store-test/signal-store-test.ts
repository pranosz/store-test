import { Component, inject, OnInit } from '@angular/core';
import { AppStore } from './signal-store/signal-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signal-store-test',
  imports: [],
  templateUrl: './signal-store-test.html',
  styleUrl: './signal-store-test.scss',
  
})
export class SignalStoreTest implements OnInit {
  readonly appStore = inject(AppStore);
  private readonly route = inject(Router);

  ngOnInit() {
    this.appStore.loadPosts();
  }

  postDetails(postId: number) {
    this.route.navigate(['/posts', postId]);
  }
}
