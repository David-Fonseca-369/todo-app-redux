import { ActionReducerMap } from "@ngrx/store";


import { filtrosValidos } from "../filtro/filtro.actions";
import { Todo } from "./models/todo.model";
import { todoReducer } from "./todo.reducer";
import { filtroReducer } from "../filtro/filtro.reducer";

export interface AppState{
  todos : Todo[],
  filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro : filtroReducer
}
