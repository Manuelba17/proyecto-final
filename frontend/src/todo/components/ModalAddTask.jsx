import { TodoAdd } from "./TodoAdd"


export const ModalAddTask = ({onNewTodo, closeModal, isLoading}) => {

  return (
    <>
    <section className='absolute bg-black bg-opacity-80 bottom-0 top-0 right-0 left-0 flex justify-center place-items-center z-20'>
        <div className="bg-white w-1/3 h-1/2 sm:h-min rounded-2xl p-3 flex flex-col md:w-4/5 sm:w-11/12 ">
            <h1 className="text-black text-center mt-4 text-lg"> Agregar nueva tarea</h1>
            <TodoAdd onNewTodo={onNewTodo} closeModal={closeModal} isLoading={isLoading}/>
        </div>   
    </section>
    </>
  )
}
