import { Component } from '@angular/core';
import { TaskItemComponent } from "../task-item/task-item.component";
import { TaskStatsComponent } from '../task-stats/task-stats.component';
import { CommonModule } from '@angular/common';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  imports: [TaskItemComponent, CommonModule, TaskStatsComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTaskTitle = '';

  addTask(title: string) {
    if (title.trim()) {
      this.tasks.push({ id: this.tasks.length + 1, title, completed: false });
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
  }
}
