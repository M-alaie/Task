import React, { useState, useContext } from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import Context from '../../assets/context/context';
import { Todos } from '../../model/todo_model'
import "../../assets/task-css/task_list.css"
import EditTask from './editTak/edit_task'

interface Props {
  Todos: Todos,
}
const TaskList: React.FC<Props> = ({ Todos }) => {

  const [edit, setedit] = useState<boolean>(false)

  const todoContext = useContext(Context)

  const Deleted = () => {
    todoContext.dispatch({ type: 'DeleteTodos', payload: Todos.id })


  }
  const done = () => {
    todoContext.dispatch({ type: 'DoneTodos', payload: Todos.id })


  }

  const editTodo = (input: string) :void =>  {

    todoContext.dispatch({ type: 'EditTodos', payload: { id: Todos.id, input } })
    setedit(false)

  }


  return (
    <form action="" className='Tasklist'>
      {
        edit===false ?(
          !Todos.isDone ? (
            <s className='todo_text'>{Todos.text}</s>
          ) : (
            <span className='todo_text'>{Todos.text}</span>
          )
        ) : (
          <EditTask Todos={Todos} editTodo={editTodo} />
        )
      }
      <div className='list_icons'>
        <span className="icon" onClick={editTodo}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={Deleted}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={done}>
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default TaskList;