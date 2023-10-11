import React from 'react'
import { Todos } from '../../model/todo_model'

import "../../assets/task-css/task_list.css"

interface Props{
    Todos:Todos,

}
const TaskList:React.FC<Props> = ({Todos}) => {
  return (
    <>
            <li>{Todos.text}</li>
    </>
  )
}

export default TaskList