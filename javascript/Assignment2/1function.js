//1. Make a function called composedValue that ...... of the second function called on the value.
function square(x) {
    return (x * x);
}

function double(x) {
    return (x * 2);
}

function composedValue(f1, f2, x) {
    return f1(f2(x));
}
console.log("Composed Value: ", composedValue(square, double, 10));

//2. Make a function called compose that takes ...... each take exactly one argument.
function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}
var f1 = compose(square, double);
console.log(f1(5));
console.log(f1(10));
var f2 = compose(double, square);
console.log(f2(5));
console.log(f2(10));

//3. Make a function called "find" that takes ...... Don't use map, filter or reduce.
function isEven(num) {
    return (num % 2 === 0);
}

function find(arr, func) {
    for (i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
}
console.log("Answer 3: ", find([1, 3, 5, 4, 2], isEven));

//4. Recent JavaScript versions added the "map" ...... Don't use map, filter or reduce.
function map(arr, func) {
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]));
    }
    return newArr;
}
console.log(map([1, 2, 3, 4, 5], square));
console.log(map([1, 4, 9, 16, 25], Math.sqrt));