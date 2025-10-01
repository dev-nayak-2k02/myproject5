export default function TodoList() {
  return (
    <>
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </>
  );
}
