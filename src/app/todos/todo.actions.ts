import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crea To Do',
  props<{ texto: string }>()
);

//Cambia el estado
export const toggle = createAction(
  '[TODO] Toggle To Do',
  props<{ id: number }>()
);

export const editar = createAction(
  '[TODO] Editar To Do',
  props<{ id: number; texto: string }>()
);

export const borrar = createAction('[TODO] Borrar To Do', props<{ id: number }>());
