export default function Student(studentDetails) {
    const{name,age,gender,voting,height} = studentDetails
  return (
    <>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Gender: {gender}</h3>
      <h3>Voting: {voting ? 'yes' : 'No'}</h3>
      <h3>Height: {height}</h3>
    </>
  );
}
