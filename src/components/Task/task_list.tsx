import React from 'react'
import { Todos } from '../../model/todo_model'
 import {AiFillEdit ,AiFillDelete} from "react-icons/ai"
 import { MdDone} from "react-icons/md"

import "../../assets/task-css/task_list.css"

interface Props {
  Todos: Todos,
  deleteTask(id:number):void
  // deletedTask:(id:number)=>void

  doneHandle:(id:number)=>void
}
const TaskList: React.FC<Props> = ({ Todos, deleteTask ,doneHandle }) => {

  const Deleted=()=>{
    deleteTask(Todos.id)
    
  }
  const done=()=>{
    doneHandle(Todos.id)
  }
  return (
    <form action="" className='Tasklist'>
      {Todos.isDone ?(
        <s className='todo_text'>{Todos.text}</s>
      ):(
        <span className='todo_text'>{Todos.text}</span>
      )}
      <div className='list_icons'>
        <span className="icon">
        <AiFillEdit/>
        </span>
        <span className="icon" onClick={Deleted}>
        <AiFillDelete/>
        </span>
        <span className="icon" onClick={done}>
        <MdDone/>
        </span>
      </div>
    </form>
  )
}

export default TaskList