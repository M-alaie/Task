
import { useState ,useRef} from "react"
import "../../Assets/task-css/inputTask.css"
// import { Todos } from "../../model/todo_model"
 interface Props{
  add:(input :string)=>void
 
 }



const InputTask :React.FC<Props> = ({add})=> {

const [Input,setInput]=useState<string>("")

const inputRef=useRef<HTMLInputElement>(null)

  const submitForm=(event :React.FormEvent<EventTarget>)=>{
    event.preventDefault()
 inputRef.current?.blur()
    if(Input.length >1){
      add(Input)
    }
    setInput("")
  
    

  }
  const changeInput=( event :React.ChangeEvent<HTMLInputElement> )=>{
      setInput(event.target.value)
  }
  return (


   <form action="" onSubmit={submitForm} className='input_form'>
    <input type="text" ref={inputRef} placeholder='Enter your Task' value={Input} onChange={changeInput} className='input_box' />
    <button className='input_submit'>GO</button>
   </form>
  )
}

export default InputTask