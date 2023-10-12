import { useContext, useEffect, useReducer } from 'react'
import {Navbar} from '../../ui/components/Navbar'
import {addNewTodo, completedTasks, deleteTodo, pendingTasks, startloadTasks, updateTodo } from '../actions/todo'
import { ListTasks } from '../components/ListTasks'
import { todoReducer } from '../reducer/todoReducer'
import '../css/dashboard.css'
import { TodoAdd } from '../components/TodoAdd'
import { AuthContext } from '../../auth/context/AuthContext'
import { useState } from 'react'

export const Dashboard = () => {

  const {state} = useContext(AuthContext)
 

  const initialState = {
    data: null,
    isLoading: true,
    msg: ""
}

const [data, dispatch] = useReducer(todoReducer,  initialState)



useEffect(() => {        
  startloadTasks(dispatch);
  }, [])

 const handleNewTodo = (todo) =>{
    
    addNewTodo(todo, dispatch)
  }

  const handleDeleteTodo = (id) =>{
    deleteTodo(id, dispatch)
  }

  const handleUpdateTodo = (id, todo) =>{
    updateTodo(id, todo, dispatch)
  }



return (
    < main className='flex h-screen' >

    <div className='bg-slate-200 w-1/5 p-5 flex flex-col gap-5'>

      <span className='mt-10'>NikcName</span>

      <div className='flex flex-col gap-5'>

      <div className='w-full bg-red-800 p-2 cursor-pointer' onClick={() => startloadTasks(dispatch)}>
      <span className='text-black '>Todas mis tareas</span>
      </div>

      <div className='w-full bg-red-800 p-2 cursor-pointer' onClick={() =>pendingTasks(dispatch)}>
      <span className='text-black '>Pendientes</span>
      </div>

      <div className='w-full bg-red-800 p-2 cursor-pointer' onClick={() => completedTasks(dispatch)}>
      <span className='text-black '>Completadas</span>
      </div>

      </div>

    </div>

  
    <section className='  w-11/12 flex flex-col'>

        <Navbar  />   
      <div className='container_tasks'>        
    
        {data.isLoading ? <h1 className='title_task'>Cargando....</h1>  : <ListTasks data={data.data} msg={data.msg} onDeleteTodo={handleDeleteTodo} onUpdateTodo={handleUpdateTodo}/> }  

 {/*        <div className='container_form'>
          <h1>Agregar una tarea</h1>
          <TodoAdd onNewTodo={handleNewTodo} />
      </div>
 */}
      </div>

    </section> 
         
    </main>
    )
}
