import { types } from "../types/types";

const URL = "https://backend-24vg.onrender.com"

export const startloadTasks = async (dispatch) => {
    
    dispatch({
        type: types.startLoad
    })

    let info
try {
    const resp = await fetch(`${URL}/api/v1/tasks`) 
    const data = await resp.json()
    info = data 
} catch (error) {
    console.log(error);    
}
     if(info?.message){
        const action = {
            type: types.messageTodo,
            payload: info
        }
        return dispatch(action)
    }    
    const loadTodo = {
        type: types.loadTodo,
        payload: info
    }

    dispatch(loadTodo)
    
}


export const addNewTodo = async (todo, dispatch) => {        
        let info

        try {
            const resp = await fetch(`${URL}/api/v1/tasks`,{
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(todo)
            })
    
            const data = await resp.json()
            info = data
        } catch (error) {
            console.log(error);            
        }       
        const addTodo = {
            type: types.addTodo,
            payload: info
        }
        dispatch(addTodo)
}


export const deleteTodo = async (id, dispatch) => {

    try {
        const resp = await fetch(`${URL}/api/v1/tasks/${id}`,{
            method: 'DELETE'})

        if(!resp.ok){
            const data = await resp.json()
             throw new Error(data.message) 
        }

        const deleteTodo = {
            type: types.deleteTodo,
            payload: id
        }

        dispatch(deleteTodo)
        
    } catch (error) {        
        console.log(error);
    }


}

export const updateTodo = async (id, todo, dispatch) => {
    let info    
    const body = {
            isDone: todo
        }   

   try {
       const resp = await fetch(`${URL}/api/v1/tasks/${id}`, {
           method: 'PATCH',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(body)
       })

       if(!resp.ok){
        const data = await resp.json()
         throw new Error(data.message) 
    }
    
       const data = await resp.json()
       info = data
    
   } catch (error) {
    console.log(error);
   }

    
        

        const update = {
            type: types.updateTodo,
            payload: info
        }

        dispatch(update)
}

export const pendingTasks = async (dispatch) =>{
    

    dispatch({
        types: types.startLoad
    })
     
   
   

    fetch(`${URL}/api/v1/tasks?isDone=false`)
    .then(resp => resp.json())
    .then(data => {
        const action ={
            type: types.filterPending,
            payload: data
        }

        dispatch(action)
    }).catch(error => console.log('Error en filtro'+ error)) 


}

export const completedTasks = async (dispatch) =>{

    dispatch({
        type: types.startLoad
    })

    


    fetch(`${URL}/api/v1/tasks?isDone=true`)
    .then(resp => resp.json())
    .then(data => {
        const action ={
            type: types.filterComplete,
            payload: data
        }

        dispatch(action)
    }).catch(error => console.log('Error en filtro'+ error))
}



