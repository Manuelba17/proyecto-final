import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/context/AuthContext"
import { completedTasks, pendingTasks, startloadTasks } from "../actions/todo"


export const ModalSide = ({setSide, dispatch}) => {

  const {onLogoutApp, modalOpen} = useContext(AuthContext)

  const navigate = useNavigate();


  const onLogout = () => {
    onLogoutApp()
    navigate('/auth/login', {replace: true});    
  }

  return (
    <>
    <section className='absolute bg-black bg-opacity-95 bottom-0 top-0 right-0 left-0 flex justify-center place-items-center z-20'>
        <div className="flex flex-col justify-between place-items-center h-full py-8">                      
            
            <h1 className="text-2xl">Menu</h1>

<div >
    <div className='w-full gap-5 p-2 cursor-pointer flex place-items-center rounded-xl' onClick={() => {startloadTasks(dispatch)
    setSide(false)}}>
      <i className="fa-solid fa-house fa-lg"></i>
      <span className=' text-lg'>Todas mis tareas</span>
    </div>

    <div className='w-full gap-5 p-2 cursor-pointer flex place-items-center rounded-xl' onClick={() =>{pendingTasks(dispatch) 
      setSide(false)}}>
      <i className=" fa-solid fa-triangle-exclamation fa-lg"></i>
      <span className=' text-lg'>Pendientes</span>
    </div>

    <div className='w-full gap-5 p-2 cursor-pointer flex place-items-center rounded-xl' onClick={() => {completedTasks(dispatch)
    setSide(false)}}>
      <i className=" fa-regular fa-circle-check fa-lg"></i>
      <span className=' text-lg'>Completadas</span>
    </div>
</div>

      
<div className="w-full mx-auto border border-x-white p-2 flex justify-between mb-2 cursor-pointer  place-items-center rounded-xl" onClick={() => {modalOpen()
setSide(false)}} >
        <div className=" flex gap-5 place-items-center">
        <i className="  fa-solid fa-plus fa-lg"></i>
        <span className="  text-lg">Nueva tarea</span>
        </div>
        <i className="  fa-regular fa-pen-to-square fa-lg"></i>
      </div>
      
      <div className="">
          <button className='border border-red-600 px-4 py-1 rounded-md hover:bg-red-600/25' onClick={onLogout}>
          Sign out
          </button>
        </div>
            
  

        </div>   
    </section>
    </>
  )
}
