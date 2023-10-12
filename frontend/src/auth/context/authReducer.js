import {types} from '../types/types'



export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload,
                isLoading: false
            }
        
        case types.logout:
            return  {
                logged: false,
                isLoading: false
            }
        
        case types.message:
            return{
                ...state,
                message: action.payload,
                isLoading: false
            }
        case types.starLoad:
            return{
                ...state,
                isLoading: true
            }    
    
    
        default:
            return state
    }

}