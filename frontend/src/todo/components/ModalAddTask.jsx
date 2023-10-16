import { TodoAdd } from "./TodoAdd"


export const ModalAddTask = ({onNewTodo, closeModal}) => {

  return (
    <>
    <section className='absolute bg-black bg-opacity-60 bottom-0 top-0 right-0 left-0 flex justify-center place-items-center z-20'>
        <div className="bg-white w-1/3 h-3/4 rounded-2xl p-3 flex flex-col">
            <h1> Agregar nueva tarea</h1>
            <TodoAdd onNewTodo={onNewTodo} closeModal={closeModal}/>
        </div>   
    </section>
    </>
  )
}