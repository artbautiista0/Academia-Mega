import { Component } from '@angular/core';
import { TaskItemComponent } from "../task-item/task-item.component";
import { TaskStatsComponent } from '../task-stats/task-stats.component';
import { CommonModule } from '@angular/common';
import { TaskService, Task } from '../task.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-list',
  imports: [TaskItemComponent, CommonModule, TaskStatsComponent, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  taskTitle = '';

  constructor(public taskService: TaskService) {}

  addTask() {
    if (this.taskTitle.trim()) {
      this.taskService.addTask(this.taskTitle);
      this.taskTitle = '';
    }
  }

  toggleTask(id: number) {
    this.taskService.toggleTask(id);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  get tasks(): Task[] {
    return this.taskService.getTasks();
  }
}
