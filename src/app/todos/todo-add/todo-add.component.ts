import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css',
})
export class TodoAddComponent {

  txtInput = new FormControl('');
  constructor() {
    this.txtInput = new FormControl('', Validators.required);
  }
}
