import { createAction, props } from '@ngrx/store';


export const createToDo = createAction(
    '[TODO] Create todo',
    props<{texto: string}>()

)

export const toggle = createAction(
    '[TODO] Togle todo',
    props<{id: number}>()

)

export const editar = createAction(
    '[TODO] Editar todo',
    props<{id: number, text: string}>()

)

export const borrar = createAction(
    '[TODO] Editar todo',
    props<{id: number}>()

)

export const limpiarCompletados = createAction(
    '[TODO] limpiar todos completados'
    

)

export const toggleAll = createAction(
    '[TODO] Toggle todo',
    props<{completado: boolean}>()

)