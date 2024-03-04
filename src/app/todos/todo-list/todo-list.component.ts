import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../app.state';
import { Todo } from '../models/todo.model';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    //Cada que se reciba un cambio, vamos a estar suscritos y se actualiza la propiedad 'todos'
    this.store.select('todos').subscribe((todos) => (this.todos = todos));
  }
}
