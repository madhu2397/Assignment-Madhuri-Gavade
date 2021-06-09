// var num = 5;
// var str = "hello";

// console.log(num + str);
/*
function repeatStringNum(string, times)
{
    var repeatString = "";
    while(times>0)
    {
        repeatString+= string;
        times--;
    }
    return repeatString;
}
console.log(repeatStringNum("abc", 3));
*/
/*
function repeat(string, num)
{
    var repeatString = "";
    while(num>0)
    {
        repeatString = repeatString+ string;
        num--;
    }
    return repeatString;
}
console.log(repeat("abc",4));*/




function repeat(string, num)
{
    for(var repeatString = ""; num>0; num--)
{
    repeatString = repeatString + string;
}
return repeatString;
}
console.log(repeat("abc", 2));