import TodoItem from "./TodoItem";
export default function TodoList(){
    return(
        <>
            {TodoList.map((item)=>(
                <TodoItem key={item} item={item}/>
            ))}
        </>
    )
}