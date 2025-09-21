export default function StudentDetails({ studentData }){
    const {roll,name,marks} = studentData
    return(
        <div>
            <h1>Student Information</h1>
            <p>Roll = {roll}</p>
            <p>Name = {name}</p>
            <p>Marks = {marks}</p>
        </div>
    );
}