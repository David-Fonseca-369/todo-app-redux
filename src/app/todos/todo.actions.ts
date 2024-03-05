import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crea ToDo',
  props<{ texto: string }>()
);

//Cambia el estado
export const toggle = createAction(
  '[TODO] Toggle ToDo',
  props<{ id: number }>()
);

export const editar = createAction(
  '[TODO] Editar Todo',
  props<{ id: number; texto: string }>()
);
