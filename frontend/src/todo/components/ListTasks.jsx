
/* eslint-disable react/prop-types */

import {TaskCard } from "./TaskCard"

// eslint-disable-next-line react/prop-types
export const ListTasks = ({data, onDeleteTodo, onUpdateTodo, msg}) => {

 
 
  return (
    <>
    <section>
        {msg && <h1 className="text-xl pl-8 text-black bg-violet-400 rounded-2xl mb-4">{msg}</h1>}
        {data.length === 0 ? <h1 className='title_task text-xl'>No hay tareas</h1> 
        : 
        <ul className='flex flex-col gap-2'>
            {data.map((task) =>(
              
                <TaskCard  
                
                key={task._id}
                onDeleteTodo={onDeleteTodo}
                onUpdateTodo={onUpdateTodo}
                {...task}
                />
            ))}

        </ul> } 
        </section>
    </>
  )
}
