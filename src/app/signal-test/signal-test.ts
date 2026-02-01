import { Component, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-signal-test',
  imports: [],
  templateUrl: './signal-test.html',
  styleUrl: './signal-test.scss',
})
export class SignalTest {
  readonly state = signal({
    products: [] as Product[],
    favoriteProductId: null as number | null,
    filter: {query:'', type: ''},
  });

  products = computed(() => this.state().products);
  favoriteProduct = computed(() => this.state().favoriteProductId);
  filter = computed(() => this.state().filter);

  updateSignal() {
    this.state.set({
      products: [
        { id: 1, name: 'Product 1', price: 10, type: 'A' },
        { id: 2, name: 'Product 2', price: 20, type: 'B' },
        { id: 3, name: 'Product 3', price: 30, type: 'A' },
      ],
      favoriteProductId: 2,
      filter: { query: 'Product', type: 'A' },
    });
  }
}