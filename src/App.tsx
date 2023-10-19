
import React, {useReducer} from 'react'
import './App.css'


import TaskReducer from './components/TaskReducer/TaskReducer'
import AddInputTask from './components/Task/add_input_Task'
import TaskList from './components/Task/task_list'
// model
import { Todos } from './model/todo_model'
import ContextTask from "./assets/context/context";

const initalState ={
  Todos:[]
 }

const App: React.FC = () => {
 
const [state,dispatch]=useReducer(TaskReducer,initalState)
      
const TodosMap = state.Todos.map((Todos :Todos) => <TaskList Todos={Todos} key={Todos.id}></TaskList>);

  console.log(state,dispatch);
  return (
  <ContextTask.Provider value={{
    Todos:state.Todos,
    dispatch
  }}>
     
    <div className='App'>
      <span className='heading'>Taskify</span>
      <AddInputTask  ></AddInputTask>
      <div className='list'>
          {TodosMap} 
      </div>
    </div>
  
  </ContextTask.Provider>
  )
}

export default App
