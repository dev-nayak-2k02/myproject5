export default function TodoItem({ item }) {
    function handleDelete(item){
        console.log(item,'clicked and deleted')
    }
  return (
    <h1>
      {item}
      <span>
        <button onClick={()=>{handleDelete(item)}}>X</button>
      </span>
    </h1>
  );
}
