import { useContext } from "react"
import { AuthContext } from "../../auth/context/AuthContext"
import useForm from "../../customsHooks/useForm"


export const TodoAdd = ({onNewTodo, closeModal, isLoading}) => {

    const {user} = useContext(AuthContext)
    

    const {values, handleInputChange, reset} = useForm({
        title: '',
        description: '',
        end_date: ''
    })

    

    const {title, description, end_date} = values

    const date = new Date(end_date)

    const onFormSumbit = (event) => {
        event.preventDefault()
        
    const newTodo = {
        title,
        description,
        isDone: false,
        end_date: date.toUTCString(),
        user: user._id
    }

    onNewTodo(newTodo, closeModal)
    reset()
    
    }
  
  return (
        <form className='task_form text-black' onSubmit={onFormSumbit}>
            <input type="text" 
            placeholder='Title' 
            className='outline-none border-b w-3/4 sm:w-11/12 text-black' 
            onChange={handleInputChange}
            name='title' 
            value={title}
            required
            />
            <textarea 
            type="text" 
            placeholder='Description' 
            className='bg-slate-400/10 w-3/4 h-36 outline-none sm:w-11/12 max-h-64 p-1 leading-5' 
            onChange={handleInputChange}
            name='description'
            value={description}
            required/>

            <input type="date"
            name="end_date"
            onChange={handleInputChange}
            value={end_date}
            required/>

{ isLoading ?  <button type="sumbit" className="border px-8 py-2 rounded-md border-black hover:bg-violet-300" disabled>
                <svg className="animate-spin mx-auto h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">    
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  
</button>
                :
                <button type='sumbit' className="border px-8 py-2 rounded-md border-black hover:bg-violet-300">Crear</button>}
            
         
        </form>
)
}
