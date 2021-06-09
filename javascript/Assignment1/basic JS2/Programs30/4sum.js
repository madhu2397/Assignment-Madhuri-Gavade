//using function
/*function sum(no)
{
    var res = 0;
    for(var i = 1; i<= no; i++)
    {
        res = (res + i);
        var main = res;
    }
    console.log(main);
}
sum(3);
*/

//using number from user
var no = prompt("Enter a number");
var res = 0;
for(var i = 1; i<=no; i++)
{
    res = (res+i);
}
console.log(res);
