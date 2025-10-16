export default function TodoItem({ item, todos, setTodos }) {
    function handleDelete(item){
        console.log(item,'deleted');
        setTodos(todos.filter((todo)=>todo !== item))
    }
  return (
    <h1>
      {item}
      <span>
        <button onClick={()=>handleDelete(item)}>X</button>
      </span>
    </h1>
  );
}
