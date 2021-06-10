//1. Symbols: Write a class that defines ...... & 'currentNo'.
const _previousNo = Symbol('previousNo');
const _currentNo = Symbol('currentNo');
const _nextTerm = Symbol('nextTerm');
class Fibonacci {
    constructor(previousNo = 0, currentNo = 1) {
        this[_previousNo] = previousNo;
        this[_currentNo] = currentNo;
        this[_nextTerm] = previousNo + currentNo;
    }
    next() {
        this[_previousNo] = this[_currentNo];
        this[_currentNo] = this[_nextTerm];
        this[_nextTerm] = this[_currentNo] + this[_previousNo];
        return this[_nextTerm];
    }
}
let fibonacciObj = new Fibonacci(0, 1);
let next_term = fibonacciObj.next();
console.log(next_term);
next_term = fibonacciObj.next();
console.log(next_term);
next_term = fibonacciObj.next();
console.log(next_term);

//2. Iterators: Write a program that returns next Armstrong number after calling getNextArmstrong()
function getArmstrongNumbers(higherLimit = 1000) {
    let armstrongArray = [];
    for (let i = 1; i <= higherLimit; i++) {
        let numberOfDigits = i.toString().length;
        let sum = 0;
        let temp = i;
        while (temp > 0) {
            let remainder = temp % 10;
            sum += remainder ** numberOfDigits;
            temp = parseInt(temp / 10);
        }
        if (sum == i) {
            armstrongArray.push(i);
        }
    }
    return armstrongArray;
}
let getArmstrongNumber = () => {
    let count = 0
    return {
        next: () => {
            let arr = getArmstrongNumbers();
            return count < arr.length ?
                { armstrong_value: arr[count++], done: false } :
                { value: undefined, done: true }

        }
    }
}
// let higherLimit = parseInt(prompt("Enter a upper limit: "));
let higherLimit = 1000;
let armstrongIterator = getArmstrongNumber()
console.log(armstrongIterator.next())
console.log(armstrongIterator.next())
console.log(armstrongIterator.next())
console.log(armstrongIterator.next())
console.log(armstrongIterator.next())
console.log(armstrongIterator.next())
console.log(armstrongIterator.next())
console.log(armstrongIterator.next())


//3.
function nextArmstrongNo(Number){

    console.log ('Armstrong Numbers:');
    // looping through lowNumber to infinity
    for (let i = Number;i<=1000 ; i++) {
        // converting number to string 
        let numberOfDigits = i.toString().length;
        let sum = 0;
        // create a temporary variable
        let temp = i;
        /* loop through a number to find if 
        a number is an Armstrong number */
        while (temp > 0) {
            let remainder = temp % 10;
            sum += remainder ** numberOfDigits;
            // removing last digit from the number
            temp = parseInt(temp / 10); // convert float into integer
        }
         if (sum == i) {
            console.log(i);
            break;
        }
        if(i==1000){
            i=0;
        }
    }
}