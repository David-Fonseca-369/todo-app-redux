import { Action, createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';

export var initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer<filtrosValidos, Action>(
  initialState,
  //no requiere el devolver el state, porque es un dato primitivo
  on(setFiltro, (state, { filtro }) => filtro)
);

export function filtroReducer(state: any, action: any) {
  return _filtroReducer(state, action);
}
