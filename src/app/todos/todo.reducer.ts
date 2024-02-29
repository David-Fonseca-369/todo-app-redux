import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear } from './todo.actions';

export const estadoInicial: Todo[] = [];

const _todoReducer = createReducer(
  estadoInicial,
  //No se recomienda hacer el push directamente ya que se podría mutar el estado
  //Se hace esto para extraer cada elemento de manera independiente del state y se agrega uno nuevo
  //siempre debemos retornar un nuevo estado y prevenir la mutación de ese objeto
  on(crear, (state, { texto }) => [...state, new Todo(texto)])
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
