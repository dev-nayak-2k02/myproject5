const arr = [10, 22, 12, 0, 30, 7, 30, 25];
let largest = arr[0];
let secondLargest = -1;
for (let index = 1; index < arr.length; index++) {
  if (arr[index] > largest) {
    secondLargest = largest;
    largest = arr[index];
  } else if(arr[index]<largest && arr[index]>secondLargest){
    secondLargest = arr[index];
  }
}
// (secondLargest != arr[arr.length-1])?secondLargest=arr[arr.length-1]:secondLargest;
console.log(secondLargest);
