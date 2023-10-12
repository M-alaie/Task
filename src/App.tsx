
import React, { useState } from 'react'
import './App.css'

import AddInputTask from './components/Task/add_input_Task'
import TaskList from './components/Task/task_list'



import { Todos } from './model/todo_model'

const App: React.FC = () => {
  const [Todos, setTodos] = useState<Todos[]>([])

  type addHandle = (input: string) => void
  const addHandle: addHandle = (input: string): void => {
   const newTodos:Todos= {
      id: Date.now(),
      text: input,
      isDone: false
    }

    setTodos([
      ...Todos ,newTodos
    ])
    
  }

  const deleteTask=(id:number)=>{
    setTodos(Todos.filter(todo=>todo.id!==id))
  }

  const doneHandle = (id: number): void => {
    setTodos(Todos.map(Todos=>{
      if(Todos.id===id){
          return {...Todos ,isDone :Todos.isDone}
      }
      return Todos
    }))
  }
 
  
const filterTods=Todos.filter(Todo=>Todo.isDone===false)

  const TodosMap=filterTods.map(Todos=><TaskList doneHandle={doneHandle} deleteTask={deleteTask} Todos={Todos} key={Todos.id}></TaskList>)
  console.log(Todos);

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <AddInputTask add={addHandle}></AddInputTask>
      <div className='list'>
      
          {TodosMap}
     
      </div>
    </div>
  )
}

export default App
