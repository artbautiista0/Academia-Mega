import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tarea {
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  tareas: Tarea[] = [
    { titulo: 'Estudiar Angular', descripcion: 'Repasar conceptos de componentes y directivas.' },
    { titulo: 'Hacer ejercicios', descripcion: 'Practicar bindings y formularios.' },
    { titulo: 'Leer documentación', descripcion: 'Revisar angular.io.' }
  ];

  mostrarLista: boolean = true;
  nuevaTarea: string = '';
  nuevaDescripcion: string = '';
  filtro: string = '';
  ordenAscendente: boolean = true;
  tareaSeleccionada: Tarea | null = null;

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      this.tareas.push({
        titulo: this.nuevaTarea.trim(),
        descripcion: this.nuevaDescripcion.trim()
      });
      this.nuevaTarea = '';
      this.nuevaDescripcion = '';
    }
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
    this.tareaSeleccionada = null;
  }

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
    this.tareaSeleccionada = null;
  }

  seleccionarTarea(tarea: Tarea) {
    this.tareaSeleccionada = tarea;
  }

  alternarOrden() {
    this.ordenAscendente = !this.ordenAscendente;
  }

  get tareasFiltradasYOrdenadas(): Tarea[] {
    let resultado = this.tareas.filter(t =>
      t.titulo.toLowerCase().includes(this.filtro.toLowerCase())
    );

    resultado.sort((a, b) => {
      const cmp = a.titulo.localeCompare(b.titulo);
      return this.ordenAscendente ? cmp : -cmp;
    });

    return resultado;
  }
}