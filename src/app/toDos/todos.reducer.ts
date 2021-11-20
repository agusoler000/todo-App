import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todos.model';
import { borrar, createToDo, editar, limpiarCompletados, toggle, toggleAll } from './todos.actions';


export const initialState: Todo[] = [
    new Todo( 'Talleres Campeon' ),
    new Todo( 'Comprar una casa' ),
    new Todo( 'Escribir un libro' ),
    new Todo( 'Ganar la loteria' ),
];

const _todoReducer = createReducer(
  initialState,
  on(createToDo, (state, {texto}) => [...state, new Todo (texto)] ),
  on ( borrar, (state, {id}) => state.filter (todo => todo.id !== id) ),
  on ( limpiarCompletados, state => state.filter (todo => todo.completado !== true)),
  on ( toggleAll, (state, {completado}) => { return state.map (todo => { return { ...todo, completado: completado}})} ),
  on(toggle, (state, {id}) => {
    return state.map( todo => {
      if(todo.id === id){
        return {
          ...todo,
          completado: !todo.completado
        }
       } else {
          return todo
        }

      
    })
  }),

  on(editar, (state, {id, text}) => {
    return state.map( todo => {
      if(todo.id === id){
        return {
          ...todo,
          text: text
        }
       } else {
          return todo
        }

      
    })
  }),

);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}