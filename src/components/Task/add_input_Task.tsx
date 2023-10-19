
import { useState, useRef, useContext } from "react"
import "../../Assets/task-css/inputTask.css"
// import { Todos } from "../../model/todo_model"
import Context from "../../assets/context/context"


const AddInputTask: React.FC = () => {

  const todoContext = useContext(Context)

  const [Input, setInput] = useState<string>("")

  const inputRef = useRef<HTMLInputElement>(null)

  const submitForm = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault()
    inputRef.current?.blur()
    if (Input.length > 1) {
      todoContext.dispatch({ type: 'AddTodos', payload: Input })
    }
    setInput("")
  }
  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }
  return (
    <form action="" onSubmit={submitForm} className='input_form'>
      <input type="text" ref={inputRef} placeholder='Enter your Task' value={Input} onChange={changeInput} className='input_box' />
      <button className='input_submit'>GO</button>
    </form>
  )
}

export default AddInputTask