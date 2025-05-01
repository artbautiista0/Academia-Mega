import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Usuario {
  nombre: string;
  rol: 'admin' | 'editor' | 'lector';
}

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuarios: Usuario[] = [
    { nombre: 'Carlos', rol: 'admin' },
    { nombre: 'Laura', rol: 'editor' },
    { nombre: 'Pedro', rol: 'lector' },
    { nombre: 'Lucía', rol: 'admin' }
  ];

  mostrarRoles: boolean = true;
  nuevoNombre: string = '';
  nuevoRol: Usuario['rol'] = 'lector';
  filtroRol: '' | Usuario['rol'] = '';

  agregarUsuario() {
    if (this.nuevoNombre.trim()) {
      this.usuarios.push({
        nombre: this.nuevoNombre.trim(),
        rol: this.nuevoRol
      });
      this.nuevoNombre = '';
      this.nuevoRol = 'lector';
    }
  }

  cambiarRol(usuario: Usuario, nuevoRol: Usuario['rol']) {
    usuario.rol = nuevoRol;
  }

  get usuariosFiltrados(): Usuario[] {
    if (!this.filtroRol) return this.usuarios;
    return this.usuarios.filter(u => u.rol === this.filtroRol);
  }

  eliminarUsuario(index: number) {
    this.usuarios.splice(index, 1);
  }
}
