import { Component, OnInit } from '@angular/core';
import { TodoService } from '../providers/todo.service';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(
      data => this.todos = data
    );
  }
}
