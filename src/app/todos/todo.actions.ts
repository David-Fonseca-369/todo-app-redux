import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Creato ToDo',
  props<{ texto: string }>()
);
