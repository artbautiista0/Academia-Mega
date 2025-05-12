import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDelete = new EventEmitter<number>();
  @Output() onToggle = new EventEmitter<number>();

  toggleCompleted() {
    console.log('Tarea completada:', this.task.title);
    this.onToggle.emit(this.task.id);
  }

  deleteTask() {
    console.log('Tarea eliminada:', this.task.title);
    this.onDelete.emit(this.task.id);
  }
}
