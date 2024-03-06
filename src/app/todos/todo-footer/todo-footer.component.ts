import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as actionsFiltro from '../../filtro/filtro.actions';
import * as actionsToDo from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css',
})
export class TodoFooterComponent implements OnInit {
  filtroActual: actionsFiltro.filtrosValidos = 'todos';
  filtros: actionsFiltro.filtrosValidos[] = [
    'todos',
    'completados',
    'pendientes',
  ];

  pendientes: number = 0;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    //? OBTENER SOLO UNA VARIABLE DEL ESTATE
    // this.store
    //   .select('filtro')
    //   .subscribe((filtro) => (this.filtroActual = filtro));

    //? OBTENER TODAS LAS VARIABLES DEL STATE
    this.store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter((todo) => !todo.completado).length;
    });
  }

  cambiarFiltro(filtro: actionsFiltro.filtrosValidos) {
    this.store.dispatch(actionsFiltro.setFiltro({ filtro: filtro }));
  }

  limpiarCompletados() {
    this.store.dispatch(actionsToDo.limpiarCompletados());
  }
}
