import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: { title: string; completed: boolean } = { title: '', completed: false };
  @Output() completed = new EventEmitter<void>();

  marcarCompletada() {
    this.completed.emit();
  }
}
