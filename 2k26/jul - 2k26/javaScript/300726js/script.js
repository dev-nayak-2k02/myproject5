// let user = 'rock';
// let comp = 'paper';
// function game(user, comp){
//     if(user === comp) return 'draw';
//     if(user === 'scissor' && comp === 'paper') return 'user';
//     if(user === 'rock' && comp === 'scissor') return 'user';
//     if(user === 'paper' && comp === 'rock') return 'user';
//     return 'computer';
// }
// console.log(game(user, comp))



// let i = 1;
// while(i<16){
//     if(i%2 !== 0){
//         console.log(i)
//     }
//     i++;
// }



// for(let i = 5; i<=50; i=i+5){
//     console.log(i);
// }



// let sum = 0;
// for(let i = 1; i<=100; i++){
//     sum += i;
// }
// console.log(sum);



// for(let i = 1; i<=50; i++){
//     if(i%3 === 0){
//         console.log(i);
//     }
// }



// let num = Number(prompt('Enter a number: '));
// for(i=1; i<num+1; i++){
//     if(i%2 === 0) {
//         console.log('even',i);
//     }
//     else {
//         console.log('odd',i)
//     }
// }

// console.log(true + false);
// console.log(null + 1);
// console.log(5 + '5');
// typeof(undefined)



// let input = 1329;
// let years = Math.floor(input/365);
// let months = Math.floor(input/(12*years));
// let weeks = Math.floor((input % 365)/7);
// let remdays = (input % 365)%7
// console.log(years, months, weeks, remdays);




// let input = 33278;
// let fiveHundredNotes = Math.floor(input / 500);
// input = Math.floor(input%500);
// let twoHundredNotes = Math.floor(input / 200);
// input = Math.floor(input%200);
// let oneHundredNotes = Math.floor(input / 100)
// input = Math.floor(input%100);
// let FiftyNotes = Math.floor(input / 50);
// input = Math.floor(input%50);
// let twentyNotes = Math.floor(input / 20);
// input = Math.floor(input%20);
// let tenNotes = Math.floor(input / 10);
// input = Math.floor(input%10);
// console.log(fiveHundredNotes, twoHundredNotes, oneHundredNotes, FiftyNotes, twentyNotes, tenNotes);



function getGrades(){
    let marks = Number(prompt("enter number between 0 to 100"));
    if(marks !== Number(marks)) return 'enter a number please';
    if(marks <= 100 && marks >= 90) return 'A';
    if(marks >= 80 && marks <= 89) return 'B';
    if(marks >= 70 && marks <= 79) return 'C';
    if(marks >= 60 && marks <= 69) return 'D';
    if(marks >= 33 && marks <= 59) return 'E';
    else return 'F';
}
console.log(getGrades());
