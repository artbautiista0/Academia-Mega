import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="post">
      <h3>Detalle del Post</h3>
      <p><strong>Título:</strong> {{ post.title }}</p>
      <p><strong>Contenido:</strong> {{ post.body }}</p>
    </div>
  `
})
export class PostDetailComponent {
  @Input() post?: Post;
}