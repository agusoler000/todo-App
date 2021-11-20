import { ActionReducerMap } from "@ngrx/store";
import { filtrosValidos } from "./filtro/filtro.actions";
import { filtroReducer } from "./filtro/filtro.reducer";
import { Todo } from "./toDos/models/todos.model";
import { todoReducer } from "./toDos/todos.reducer";


export interface AppState{
    todos: Todo[],
    filtro: any | filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {

    todos: todoReducer,
    filtro: filtroReducer

}