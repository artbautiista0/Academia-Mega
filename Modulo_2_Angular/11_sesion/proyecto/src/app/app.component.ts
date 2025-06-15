import { Component } from '@angular/core';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormComponent, TemplateFormComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  showReactive = true;

  toggleForm() {
    this.showReactive = !this.showReactive;
  }
}
