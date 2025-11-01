export default function TodoItem({ item }) {
    function handleDelete(item){
        
    }
  return (
    <h3>
      {item}
      <span>
        <button onClick={()=>{handleDelete(item)}}>X</button>
      </span>
    </h3>
  );
}
