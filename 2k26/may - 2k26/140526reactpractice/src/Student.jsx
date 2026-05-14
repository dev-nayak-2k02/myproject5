import React from "react";
function Student(props){
    console.log(props)
    console.log(typeof props)
    return(
        <>
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
        </>
    )
}
export default Student