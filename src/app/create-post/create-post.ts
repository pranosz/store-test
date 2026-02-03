import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppStore } from '../signal-store-test/signal-store/signal-store';

@Component({
  selector: 'app-create-post',
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './create-post.html',
  styleUrl: './create-post.scss',
})
export class CreatePost {
  postForm: FormGroup;
  private readonly fb = inject(FormBuilder);
  readonly appStore = inject(AppStore);

  constructor() {
    console.log('CreatePost component initialized');
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      body: ['', Validators.required],
      userId: [1],
    });
  }

  onSubmit() {
    if (this.postForm.invalid) {
      this.postForm.markAllAsTouched();
      return;
    }
    console.log('Create post:', this.postForm.value);
    this.appStore.createPost(this.postForm.value);
    this.postForm.reset({ userId: 1 });
  }
}