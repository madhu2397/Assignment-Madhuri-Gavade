// let arr = [1,2,3,4];
// for(i=arr[0]; i<=arr.length;i++)
// {
//     sum = arr[i]+arr[i+1];
    //1. Make a function that returns "even" or "odd" depending on the number passed to it.
function parity(num) {
    if (num) {
        num % 2 == 0 ? console.log("even") : console.log("odd")
    } else {
        console.error("Argument not found!");
    }
}
parity(1);
parity(2);

//2. The notes showed a simple version ...... no using Math.max() on this exercise.
function maxNumber(numOne, numTwo, numThree) {
    if (numOne && numTwo && numThree) {
        var numMax = (numOne > numTwo) ? numOne : numTwo;
        numMax = (numThree > numMax) ? numThree : numMax;
        console.log(numMax);
    } else {
        console.error("Enter 3 arguments!");
    }
}
maxNumber(1, 2, 3);
maxNumber(1, 3, 2);
maxNumber(3, 2, 1);

//3. Copy the flipCoin function from ...... and return the number of heads.
function numHeads(num) {
    var heads = 0;
    var tails = 0;
    for (i = 0; i < num; i++) {
        var coinFlip = Math.random();
        if (coinFlip < 0.5) {
            heads++;
        } else {
            tails++;
        }
    }
    console.log(heads);
}
numHeads(10);

//4. Make a function that takes a number of flips and returns the fraction that were heads.
function headsRatio(num) {
    var heads = 0;
    var tails = 0;
    for (i = 0; i < num; i++) {
        var coinFlip = Math.random();
        if (coinFlip < 0.5) {
            heads++;
        } else {
            tails++;
        }
    }
    console.log(heads / num);
}
headsRatio(10);
headsRatio(10000);
headsRatio(1000000);

//5. Make a function that takes a number ...... concatenated that number of times.
function padChars(num, char) {
    var paddedString = ""
    for (i = 0; i < num; i++) {
        paddedString += char;
    }
    console.log(paddedString);
}
padChars(5, "x");
padChars(7, "-");

//6. Write a function that returns the number of times you have to roll a die to get a 6.
function numRollsToGetSix() {
    var randomNumber = 1;
    var times = 0;
    randomNumber = Math.floor(Math.random() * 6) + 1
    if (randomNumber === 6) {
        times = 1;
    } else {
        while (randomNumber) {
            if (randomNumber === 6) {
                break;
            } else {
                times++;
                randomNumber = Math.floor(Math.random() * 6) + 1;
            }
        }
    }
    console.log(times);
}
numRollsToGetSix();

//7. Update the HTML page so ...... some CSS already, make the font big.
function haveSomeDay() {
    var divSeven = document.getElementById("answer-seven");
    var ansSeven = document.createElement("p");
    if (Math.random() < 0.5) {
        ansSeven.innerHTML = "Have a GOOD Day!";
        divSeven.appendChild(ansSeven);
        ansSeven.style.fontSize = "40px";
    } else {
        ansSeven.innerHTML = "Have a BAD Day!";
        divSeven.appendChild(ansSeven);
        ansSeven.style.fontSize = "40px";
    }
}
haveSomeDay();
// }
// console.log(sum);

let arr=[1,2,3,4];
[1,2,3,4].reduce((a,b)=>a+b,0)
{
    return a+b;
}