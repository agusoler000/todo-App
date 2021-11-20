import { Action, createReducer, on } from "@ngrx/store";
import { filtrosValidos, limpiarCompletados, setFiltro } from "./filtro.actions";

export const initialState: filtrosValidos | string = "todos";


const _filtroReducer = createReducer(
    initialState,
    on(setFiltro, (state,{filtro})=> filtro)
 
);


    export function filtroReducer(state: any, action: any){
        return _filtroReducer(state, action)
    }