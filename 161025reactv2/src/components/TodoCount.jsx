export default function TodoCount({todos}){
    return(
        <>
            {todos.length}
            {todos.map((item)=>{
                return <span>{item}</span>
            })}
        </>
    )
}
import React from 'react'

