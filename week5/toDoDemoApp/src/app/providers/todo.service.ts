import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  // call the to do's api to get all todos
  getTodos(): Observable<Todo[]> {
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
      .pipe(map(res => <Todo[]>res))
  }
}
