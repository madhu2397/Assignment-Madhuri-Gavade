/* "use strict";
var a = "bob";
var a = "alias";
console.log(a);

//Symbols
function fibbo(num) {
    let previousNum = 0, currentNum = 1;
    for (let i = 0; i <= num; i++) {
        let nextNum = previousNum + currentNum;
        previousNum = currentNum;
        currentNum = nextNum;
        console.log(previousNum);
    }
}
fibbo(8);

//Iterators
function armStrong(number){
   let sum = 0;
   let temp = number;
   while(temp>0)
   {
       let remainder = temp % 10;
       sum += remainder*remainder*remainder;
       temp = parseInt(temp/10);
   } 
   if(sum==number){
       console.log($number+ "is armstrong number");
   }
   else{
       console.log($number+ "is not a armstrong number");
   }
}
armStrong(153);*/
let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}