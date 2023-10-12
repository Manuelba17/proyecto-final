
/* eslint-disable react/prop-types */

import {TaskCard } from "./TaskCard"

// eslint-disable-next-line react/prop-types
export const ListTasks = ({data, onDeleteTodo, onUpdateTodo, msg}) => {

 
 
  return (
    <>
    <section>
        {msg && <h1>{msg}</h1>}
        {data.length === 0 ? <h1 className='title_task'>No hay tareas</h1> 
        : 
        <ul className="list_task">
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
