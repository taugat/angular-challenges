import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { randText } from '@ngneat/falso';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly URL = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.URL);
  }

  update(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(
      `${this.URL}/${todo.id}`,
      JSON.stringify({
        todo: todo.id,
        title: randText(),
        //body: todo.body,
        userId: todo.userId,
      }),
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  }
}
