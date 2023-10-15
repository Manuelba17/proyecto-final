import { useContext, useEffect, useReducer } from 'react'
import {Navbar} from '../../ui/components/Navbar'
import {addNewTodo, deleteTodo, startloadTasks, updateTodo } from '../actions/todo'
import { ListTasks } from '../components/ListTasks'
import { todoReducer } from '../reducer/todoReducer'
import '../css/dashboard.css'
import { TodoAdd } from '../components/TodoAdd'
import { AuthContext } from '../../auth/context/AuthContext'
import { SideBar } from '../components/SideBar'
import { ModalAddTask } from '../components/ModalAddTask'

export const Dashboard = () => {

  const {modalState, modalClose} = useContext(AuthContext)
 

  const initialState = {
    data: null,
    isLoading: true,
    msg: ""
}

const [data, dispatch] = useReducer(todoReducer,  initialState)



useEffect(() => {        
  startloadTasks(dispatch);
  }, [])

 const handleNewTodo = (todo, closeModal) =>{
    
    addNewTodo(todo, dispatch, closeModal)
  }

  const handleDeleteTodo = (id) =>{
    deleteTodo(id, dispatch)
  }

  const handleUpdateTodo = (id, todo) =>{
    updateTodo(id, todo, dispatch)
  }



return (
  <>
    < main className='flex h-screen fondo' >

{modalState && <ModalAddTask onNewTodo={handleNewTodo} closeModal={modalClose} />}
   
    <SideBar dispatch={dispatch} />
  
    <section className='w-11/12 flex flex-col'>

        <Navbar  />   
      <div className=' w-11/12 mx-auto'>        
    
        {data.isLoading ? <h1 className='title_task'>Cargando....</h1>  : <ListTasks data={data.data} msg={data.msg} onDeleteTodo={handleDeleteTodo} onUpdateTodo={handleUpdateTodo}/> }  

       </div>

    </section> 
         
    </main>

  </>
    )
}
