import TodoItem from "../../../myproject011025v1/src/components/TodoItem";
export default function TodoList({todos}) {
  return (
    <>
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </>
  );
}
