import { types } from "../types/types";

const initialState = {
    data: [],
    isLoading: true,
    msg: ""
}


export const todoReducer = ( state = initialState, action ) => {

        switch (action.type) {
            case types.addTodo:
            return {
                ...state,
                data: [ ...state.data, action.payload],
                isLoading: false
            }

            case types.loadTodo:
            return {
                ...state,
                data: [...action.payload],
                isLoading: false,
                msg: "Todas las tareas"
            }

            case types.messageTodo:
                return {
                    ...state,
                    data: [],
                    isLoading: false,
                    msg: 'Todas las tareas'
                }

            case types.deleteTodo:
                return {
                    ...state,
                    data: state.data.filter( todo => todo._id !== action.payload),
                    isLoading: false
                }
            
            case types.updateTodo:
                return {
                    ...state,
                    data: state.data.map( todo => todo._id === action.payload._id ? action.payload : todo),
                    
                }

            case types.startLoad:
                return {
                    ...state,
                    isLoading: true
                }
            case types.filterPending:
                return {
                    ...state,
                    data: [...action.payload],
                    isLoading: false,
                    msg: 'Tareas pendientes'
                }
            case types.filterComplete:
                return{
                    ...state,
                    data: [...action.payload],
                    isLoading: false,
                    msg: 'Tareas completadas'
                }
        
            default:
               return initialState
        }

}
