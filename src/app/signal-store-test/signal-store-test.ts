import { Component, inject } from '@angular/core';
import { AppStore } from './signal-store/signal-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signal-store-test',
  imports: [],
  templateUrl: './signal-store-test.html',
  styleUrl: './signal-store-test.scss',
  
})
export class SignalStoreTest {
  readonly appStore = inject(AppStore);
  private readonly route = inject(Router);

  postDetails(postId: number): void {
    this.route.navigate(['/posts', postId]);
  }

  goToCreate(): void {
    this.route.navigate(['/posts', 'create']);
  }
}
