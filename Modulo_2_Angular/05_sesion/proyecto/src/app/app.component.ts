import { Component } from '@angular/core';
import { UsuariosComponent } from './usuarios/usuarios.component';

@Component({
  selector: 'app-root',
  imports: [UsuariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto';
}
