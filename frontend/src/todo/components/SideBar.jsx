
import { useContext } from "react"
import { AuthContext } from "../../auth/context/AuthContext"
import { completedTasks, pendingTasks, startloadTasks } from "../actions/todo"


export const SideBar = ({dispatch}) => {

  const {modalOpen, user} = useContext(AuthContext)  

  

  return (

    <div className='bg-slate-200 w-1/5 h-full flex flex-col gap-5 justify-between md:hidden xl:w-1/3'>

      <span className='mt-10 bg text-center pb-5 border-b-2 border-b-violet-800 text-black'>Acciones</span>

      <div className='flex flex-col gap-5 flex-grow'>

   
      <div className='w-full gap-5 p-2 cursor-pointer flex hover:bg-violet-200 place-items-center rounded-xl' onClick={() => startloadTasks(dispatch , user._id)}>
      <i className="fa-solid fa-house text-black fa-lg"></i>
      <span className='text-black text-lg'>Todas mis tareas</span>
      </div>

      <div className='w-full gap-5 p-2 cursor-pointer flex hover:bg-violet-200 place-items-center rounded-xl' onClick={() =>pendingTasks(dispatch, user._id)}>
      <i className="text-black fa-solid fa-triangle-exclamation fa-lg"></i>
      <span className='text-black text-lg'>Pendientes</span>
      </div>

      <div className='w-full gap-5 p-2 cursor-pointer flex hover:bg-violet-200 place-items-center rounded-xl' onClick={() => completedTasks(dispatch, user._id)}>
      <i className="text-black fa-regular fa-circle-check fa-lg"></i>
      <span className='text-black text-lg'>Completadas</span>
      </div>

      </div>

      <div className=" w-10/12 mx-auto border border-black p-2 flex justify-between mb-2 cursor-pointer hover:bg-violet-200 place-items-center rounded-xl" onClick={() => modalOpen()} >
        <div className=" flex gap-5 place-items-center">
        <i className=" text-black fa-solid fa-plus fa-lg"></i>
        <span className=" text-black text-lg">Nueva tarea</span>
        </div>
        <i className=" text-black fa-regular fa-pen-to-square fa-lg"></i>
      </div>

      
    </div>
  )
}
