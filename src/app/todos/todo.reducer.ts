import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { borrar, crear, editar, toggle } from './todo.actions';

export const estadoInicial: Todo[] = [
  new Todo('Primera tarea'),
  new Todo('Segunda tarea'),
  new Todo('Tercera tarea'),
];

const _todoReducer = createReducer(
  estadoInicial,
  //No se recomienda hacer el push directamente ya que se podría mutar el estado
  //Se hace esto para extraer cada elemento de manera independiente del state y se agrega uno nuevo
  //siempre debemos retornar un nuevo estado y prevenir la mutación de ese objeto
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),

  //Regresa todos los ToDos, cuyo Ids sea distintos al id que te le envío
  on(borrar,(state, {id}) => state.filter( todo => todo.id !== id)),
  on(toggle, (state, { id }) => {
    //EL map, retorna un nuevo arreglo, es parecido a un foreach, lo que hace es iterar cada uno de los elementos y los transforma y devuelve un
    //nuevo arreglo
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          //operador spread |  copiar sus elementos en otro array o pasarlos como argumentos a una función
          ...todo, //extrae el resto de los elementos, pero deja lo opuesto de completado
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),

  on(editar, (state, { id, texto }) => {
    //EL map, retorna un nuevo arreglo, es parecido a un foreach, lo que hace es iterar cada uno de los elementos y los transforma y devuelve un
    //nuevo arreglo
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          //operador spread |  copiar sus elementos en otro array o pasarlos como argumentos a una función
          ...todo, //extrae el resto de los elementos, pero deja lo opuesto de completado
          texto: texto,
        };
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
