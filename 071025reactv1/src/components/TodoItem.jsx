export default function TodoItem({ item }) {
    function handledelete(item){
        console.log(item,`button is clicked and deleted`);
    }
  return (
    <h1>
      {item}
      <span>
        <button onClick={() => handledelete(item)}>X</button>
      </span>
    </h1>
  );
}
