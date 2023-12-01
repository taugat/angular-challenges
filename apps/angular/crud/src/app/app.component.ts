import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Todo } from './model/todo.model';
import { TodoService } from './service/todo.service';
import { BehaviorSubject } from 'rxjs';
import { LoadingIndicatorService } from './service/loading-indicator.service';

@Component({
  standalone: true,
  imports: [CommonModule, AsyncPipe, MatProgressSpinnerModule],
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngIf="loader.isLoading$ | async" class="spinner-overlay">
      <mat-spinner diameter="50"></mat-spinner>
    </div>
    <div *ngFor="let todo of todos$ | async">
      {{ todo.title }}
      <button (click)="update(todo)">Update</button>
      <button (click)="delete(todo)">Delete</button>
    </div>
  `,
  styles: [
    `
      .spinner-overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: rgba(255, 255, 255, 0.7);
        z-index: 9999;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  private todos = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todos.asObservable();

  constructor(
    private todoService: TodoService,
    public loader: LoadingIndicatorService,
  ) {}

  ngOnInit(): void {
    this.todoService.getAll().subscribe((t) => {
      this.todos.next(t);
    });
  }

  update(todo: Todo) {
    this.todoService.update(todo).subscribe((todoUpdated: Todo) => {
      let todoTempList = this.todos.value;
      let index = todoTempList.findIndex((t) => t.id === todoUpdated.id);
      todoTempList[index] = todoUpdated;

      this.todos.next(todoTempList);
    });
  }

  delete(todo: Todo) {
    this.todoService.delete(todo.id).subscribe(() => {
      let todoTempList = this.todos.value.filter((t) => t.id !== todo.id);
      this.todos.next(todoTempList);
    });
  }
}
