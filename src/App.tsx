
import React, { useState } from 'react'
import './App.css'

import InputTask from './components/Task/inputTask'
import TaskList from './components/Task/taskList'



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

  console.log(Todos);

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputTask add={addHandle}></InputTask>
      <TaskList></TaskList>
    </div>
  )
}

export default App
