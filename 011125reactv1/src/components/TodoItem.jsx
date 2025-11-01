export default function TodoItem({ item }) {

    function handleDelete(item){
        console.log(item,'item is clicked')
    }
  return (
    <h3>
      {item}
      <span>
        <button onClick={(item)=>{handleDelete}}>X</button>
      </span>
    </h3>
  );
}
