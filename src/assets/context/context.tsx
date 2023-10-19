import React from "react";

const ContextTask=React.createContext({
    Todos:[],
    dispatch:({type ,payload}:{type?:string , payload ?:string})=>{}
    
})

export default ContextTask