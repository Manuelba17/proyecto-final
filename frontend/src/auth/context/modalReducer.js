import { types } from "../types/types";

export const modalReducer = ( state = false, action) => {

    switch (action.type) {
        case types.openModal:
            return true
        
        case types.closeModal:
            return false
    
        default:
            return state;
    }
 
}
