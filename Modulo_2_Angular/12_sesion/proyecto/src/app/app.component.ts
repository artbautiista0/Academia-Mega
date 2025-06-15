import { Component } from '@angular/core';
import { PostListComponent } from './components/post-list/post-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostListComponent],
  template: `
    <h1>Lista de Publicaciones</h1>
    <app-post-list />
  `
})
export class AppComponent {}
