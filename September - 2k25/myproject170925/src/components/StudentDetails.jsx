export default function StudentDetails({studentData}){
    const{name,roll,marks} = studentData
    return(
        <div>
            <h1>Student Details Component</h1>
            <p>name = {name}</p>
            <p>roll = {roll}</p>
            <p>marks = {marks}</p>
        </div>
    )    
}