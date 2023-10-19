/* eslint-disable react/prop-types */

export const TaskCard = ({_id, title, description, isDone, onDeleteTodo, onUpdateTodo, end_date}) => {

  
 
  const date = new Date(end_date)

  
  const expiresDate = date.toUTCString().split(' ').slice(0,3).join(' ')

    

  return (
    <>
    <li key={_id} className='card_task  shadow-md transition-shadow shadow-slate-50/50 sm:shadow-slate-50/30'>
      <div className=" w-full h-full flex justify-between md:flex-col">
            <div className="flex flex-col" >
                    <h2 className={isDone ? 'line-through decoration-2': ''} >{title}</h2>  
                    <small >{description}</small>
                    
            </div>
            <div className="flex mt-1 place-items-center gap-3 md:justify-between">
                  <div >
                  <i className="fa-solid fa-calendar-day fa-xs mr-1"></i>
                   <small >{expiresDate}</small> 
                  </div>
                  
                  <div className="flex gap-3 place-items-center">
                  <span className="cursor-pointer" onClick={ () => onUpdateTodo(_id, !isDone)} > {  isDone ? "✔️" : "❌"}</span>
                  <i className="fa-regular fa-trash-can fa-xl cursor-pointer" onClick={() => onDeleteTodo(_id)}></i>
                  </div>
            </div>
      </div>
                  
                </li>
    </>
  )
}
