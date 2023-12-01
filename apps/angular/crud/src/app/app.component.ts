import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Todo } from './model/todo.model';
import { TodoService } from './service/todo.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngFor="let todo of todos$ | async">
      {{ todo.title }}
      <button (click)="update(todo)">Update</button>
      <button (click)="delete(todo)">Delete</button>
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  private todos = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todos.asObservable();

  constructor(private todoService: TodoService) {}

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
