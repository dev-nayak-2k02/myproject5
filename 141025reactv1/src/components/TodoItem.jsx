export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log(item, "clicked and deleted");
    setTodos(todos.filter((todo)=>todo !== item))
  }
  return (
    <h1>
      {item}
      <span>
        <button onClick={() => handleDelete(item)}>x</button>
      </span>
    </h1>
  );
}
