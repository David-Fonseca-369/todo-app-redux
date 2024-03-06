import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent implements OnInit {
  chkCompletado = new FormControl();
  txtInput = new FormControl();

  editando: boolean = false;

  constructor(private store: Store<AppState>) {}

  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  ngOnInit(): void {
    // operador de aserción no nulo  '!'
    //básicamente le está diciendo al compilador que no se preocupe de que esto no esté definido. pero si no está definido obtendrás un error
    // this.todo!.completado = true;

    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    //Para escuchar los cambios
    this.chkCompletado.valueChanges.subscribe((valor) => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  editar() {
    this.editando = true;

    //Para que se ejecute una milésima a destiempo, ya que aun no se carga el componente y ya quiere poner el foco
    setTimeout(() => {
      //se pone el foco
      // this.txtInputFisico!.nativeElement.focus();
      //te subraya el texto y puede comenzar a escribir algo nuevo
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid) {
      return;
    }

    //si no hizo ninguna modificación
    if (this.txtInput.value === this.todo.texto) {
      return;
    }

    this.store.dispatch(
      actions.editar({ id: this.todo.id, texto: this.txtInput.value })
    );
  }

  borrar() {
    this.store.dispatch(actions.borrar({ id: this.todo.id }));
  }
}
