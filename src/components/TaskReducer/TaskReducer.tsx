import { Todos } from "../../model/todo_model"

export type TodoState = {
    Todos: []
}
type  edit={
    id:number,
    input:string
}
type actionTodos =
    | { type: 'AddTodos', payload: string }
    | { type: 'DeleteTodos', payload: number }
    | { type: 'DoneTodos', payload: boolean }
    | { type: 'EditTodos', payload:edit}




const TaskReducer = (state: TodoState, action: actionTodos) => {
    switch (action.type) {
        case "AddTodos":
            return addHandle(state, action)
        case "DeleteTodos":
            return deleteTodos(state, action)
        case "EditTodos":
            return editHandle(state,action)
        case "DoneTodos":
            return doneHandle(state, action)
        default:

            return state
            break;
    }

}

// add todos
type addHandle = () => void
const addHandle = (state: TodoState, action: actionTodos) => {
    if (typeof action.payload === 'string') {
        const input = action.payload

        const newTodos: Todos = {
            id: Date.now(),
            text: input,
            isDone: false
        }
        return {
            ...state,
            Todos: [...state.Todos, newTodos]
        }
    }
}

const deleteTodos = (state: TodoState, action: actionTodos) => {
    return {
        ...state,
        Todos: state.Todos.filter((item: Todos) => item.id !== action.payload)
    }
}
const editHandle = (state: TodoState, action: actionTodos) => {
    const { id, input } = action.payload;
    return state.Todos.map((todo: Todos) => {
        return todo.id === id ? { ...todo, text: input } : todo;
    });
}
// روش 1
const doneHandle = (state: TodoState, action: actionTodos) => {
    return state.Todos.map((todos:Todos)=>{
        todos.id!==action.payload ? {...todos, isDone:!todos.isDone} : todos
    })
}
// روش دوم
// const doneHandle = (state: TodoState, action: actionTodos) => {
//     const newTodos = state.Todos.map((todos: Todos) => {
//         return todos.id === action.payload
//             ? { ...todos, isDone: !todos.isDone }
//             : todos;
//     });

//     return {
//         ...state,
//         Todos: newTodos
//     };
// };

// //  edit Todos
// const editHandle = (id: number, input: string): void => {
// setTodos(Todos.map(item => {
//   if (item.id === id) {
//     return { ...item, text:input}; // Update the 'text' property of the item
//   }
//   return item; // Return the unchanged item if the 'id' doesn't match
// }));
// }

export default TaskReducer