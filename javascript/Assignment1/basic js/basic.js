//1. Create an array containing four ...... array variable in Firebug.
var fourNums = [];
for (i = 0; i < 4; i++) {
    fourNums[i] = Math.random();
}
console.log(fourNums);

//2. Create an array containing 100 ...... Print out the array.
var hundredNums = [];
for (i = 0; i < 100; i++) {
    hundredNums[i] = Math.random();
}
console.log(hundredNums);

//3. Make a function that gives an ....... an array of the corresponding numbers.
var strings = ["1.2", "2.3", "3.4"];
var nums = [];

function numberArray(strings) {
    for (i = 0; i < strings.length; i++) {
        strings[i] = Number(strings[i]);
    }
    return strings;
}
nums = numberArray(strings);
console.log(nums);


//4. Write a function that, given ...... that contains neither an a nor a b.
function removeEmptyElement(arr) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === "") {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}

function longestToken(string) {
    var arrayOfstring = string.split("ab");
    var longestString = "";
    if (!(arrayOfstring.includes("a") || arrayOfstring.includes("b"))) {
        removeEmptyElement(arrayOfstring);
        longestString = arrayOfstring.reduce((a, b) => {
            return a.length > b.length ? a : b;
        });
    }
    return longestString;
}
console.log(longestToken("ababcdababefgababhiab"));
console.log(longestToken("aba"));

//5. Write a function that, given ...... and string methods/properties (indexOf, length).
function lengthOfNonQWords(strings) {
    var totalLength = 0;
    for (i = 0; i < strings.length; i++) {
        if (strings[i].includes("q")) {
            continue
        } else {
            totalLength += strings[i].length;
        }
    }
    console.log(totalLength);
}
lengthOfNonQWords(["stop", "quit", "exit"]);
lengthOfNonQWords(["queen", "quit"]);