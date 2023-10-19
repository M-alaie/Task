import React, { useState } from 'react'
 import "../../../assets/task-css/inputEdit.css"
import { Todos } from '../../../model/todo_model'




 interface Props{
    Todos:Todos,
    editTodo:(input :string)=>void


 }

const EditTask:React.FC<Props> = ({Todos,editTodo }) => {

    const [input ,setinput]=useState<string>(Todos.text)



    const formEvent=(event:React.FormEvent):void=>{
      event.preventDefault()
      editTodo(input)
      
    }
  return (
    <form onSubmit={formEvent}>
   <input type="text" value={input} onChange={(e)=>setinput(e.target.value)} className='input_edit' />
 
  
   </form>
  )
}

export default EditTask