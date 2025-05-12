import { Component, Input } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-stats',
  imports: [],
  templateUrl: './task-stats.component.html',
  styleUrl: './task-stats.component.css'
})
export class TaskStatsComponent {
  @Input() tasks: Task[] = [];

  get total() {
    return this.tasks?.length ?? 0;
  }

  get completed() {
    return this.tasks?.filter(t => t.completed).length ?? 0;
  }

  get pending() {
    return this.tasks?.filter(t => !t.completed).length ?? 0;
  }
}
