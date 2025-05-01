import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  mensaje: string = 'Hola desde el componente!';
  nombre: string = 'Arturo';
  contador: number = 0;

  incrementar() {
    this.contador++;
  }
}
