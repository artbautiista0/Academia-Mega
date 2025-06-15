import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService, Post } from '../../services/post.service';
import { PostDetailComponent } from '../post-detail/post-detail.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PostDetailComponent],
  template: `
    <form (submit)="addPost(); $event.preventDefault()">
      <input [(ngModel)]="newPost.title" name="title" placeholder="Título" required />
      <textarea [(ngModel)]="newPost.body" name="body" placeholder="Contenido" required></textarea>
      <button type="submit">Agregar</button>
    </form>

    <ul>
      <li *ngFor="let post of posts">
        <strong (click)="selectPost(post)" style="cursor:pointer">{{ post.title }}</strong>
        <button (click)="deletePost(post)">🗑️</button>
      </li>
    </ul>

    <app-post-detail [post]="selectedPost" />
  `
})
export class PostListComponent {
  posts: Post[] = [];
  selectedPost?: Post;
  newPost: Post = { title: '', body: '', userId: 1 };

  constructor(private postService: PostService) {
    this.fetchPosts();
  }

  fetchPosts() {
    this.postService.getPosts().subscribe(data => this.posts = data.slice(0, 5));
  }

  selectPost(post: Post) {
    console.log('Post seleccionado:', post);
    this.selectedPost = post;
  }

  addPost() {
    if (!this.newPost.title.trim() || !this.newPost.body.trim()) return;

    this.postService.addPost(this.newPost).subscribe(post => {
      this.posts.unshift(post);
      this.newPost = { title: '', body: '', userId: 1 };
    });
  }

  deletePost(post: Post) {
    if (!post.id) return;

    this.postService.deletePost(post.id).subscribe(() => {
      this.posts = this.posts.filter(p => p.id !== post.id);
      if (this.selectedPost?.id === post.id) this.selectedPost = undefined;
    });
  }
}