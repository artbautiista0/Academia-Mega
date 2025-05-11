import { Component } from '@angular/core';
import { TaskItemComponent } from "../task-item/task-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [TaskItemComponent, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks = [
    { title: 'Estudiar Angular', completed: false },
    { title: 'Hacer ejercicio', completed: false },
    { title: 'Leer un libro', completed: false }
  ];

  completarTarea(index: number) {
    this.tasks[index].completed = true;
  }
}
