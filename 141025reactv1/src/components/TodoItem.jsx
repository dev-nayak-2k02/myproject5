export default function TodoItem({ item }) {
    function handleDelete(item){
        console.log(item,'clicked and deleted')
        
    }
  return (
    <h1>
      {item}
      <span>
        <button onClick={()=>handleDelete(item)}>x</button>
      </span>
    </h1>
  );
}
