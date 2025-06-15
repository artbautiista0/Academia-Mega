import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Formulario Reactivo</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label>Nombre: <input formControlName="name" /></label>
      <div *ngIf="name?.touched && name?.invalid">
        <small *ngIf="name?.errors?.['required']">Requerido</small>
      </div>

      <label>Email: <input formControlName="email" /></label>
      <label>Edad: <input formControlName="age" type="number" /></label>

      <button [disabled]="form.invalid">Enviar</button>
    </form>
  `
})
export class ReactiveFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  get name() {
    return this.form.get('name');
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
