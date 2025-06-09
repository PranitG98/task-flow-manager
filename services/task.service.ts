import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskService {
  tasks = {
    todo: [],
    inProgress: [],
    done: []
  };

  getTasks() {
    const saved = localStorage.getItem('tasks');
    if (saved) this.tasks = JSON.parse(saved);
    return this.tasks;
  }

  updateTasks(tasks: any) {
    this.tasks = tasks;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}