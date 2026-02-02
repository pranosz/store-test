import { Component, signal, inject, OnInit, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppStore } from '../signal-store-test/signal-store/signal-store';


@Component({
  selector: 'app-post-details',
  imports: [],
  templateUrl: './post-details.html',
  styleUrl: './post-details.scss',
})
export class PostDetails implements OnInit {
  private readonly route = inject(ActivatedRoute);
  readonly appStore = inject(AppStore);
  private readonly postId = signal<number>(0);
  readonly post = computed(() => {
    const id = this.postId();
    const postSignal = this.appStore.getPostById(id);
    return postSignal();
  });

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const numericId = id ? Number(id) : 0;
      this.postId.set(numericId);
    });
  }

}
