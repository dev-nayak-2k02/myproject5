// const student = {
//   nam: "dev prasanna",
//   roll: 12,
//   Class: 10,
// };

// const{nam,roll,Class} = student;
// console.log(nam);

// const array = [1,2,3,4,5,6,7];
// const[a,b,c,d,e,f,g] = array;
// console.log(a);
// let newArray = array.map((val, index)=>{
//   return val*2;
// });
// console.log(newArray);

// let newArray = array.filter((val, index)=>(
//   val%2 == 0
// ))
// console.log(newArray);

// let newArray = array.find((val, index)=>(
//   val == 2
// ));
// console.log(newArray);




// let arr = [1, 2, 3, 0, 4, 5, 0];
// let inc = 0;
// for (let k = 1; k <= arr.length - 1; k++) {
//   if (arr[k] == 0) {
//     inc++;
//   }
// }
// let temp = 0;
// for (let j = 1; j <= inc; j++) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] == 0) {
//       temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//   }
// }
// console.log(arr)





let arr = [1, 2, 3, 0, 4, 5, 0];
for(let i=0; i<arr.length-1;i++){
  if(arr[i] != 0){
    temp = arr[i];
    arr[i] = temp;
    arr[i] = 0
    j++
  }
}