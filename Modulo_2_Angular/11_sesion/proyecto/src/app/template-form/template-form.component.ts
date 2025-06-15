import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Formulario Template-driven</h2>
    <form #f="ngForm" (ngSubmit)="onSubmit(f)">
      <label>Nombre:
        <input name="name" [(ngModel)]="user.name" required #name="ngModel" />
        <div *ngIf="name.invalid && name.touched">
          <small>Campo requerido</small>
        </div>
      </label>

      <label>Email:
        <input name="email" [(ngModel)]="user.email" />
      </label>

      <label>Edad:
        <input name="age" type="number" [(ngModel)]="user.age" />
      </label>

      <button [disabled]="f.invalid">Enviar</button>
    </form>
  `
})
export class TemplateFormComponent {
  user = {
    name: '',
    email: '',
    age: null
  };

  onSubmit(form: any) {
    console.log('Datos template-driven:', this.user);
  }
}