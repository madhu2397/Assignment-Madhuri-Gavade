//default parameter
/*
var a,b;
function add(a=5, b=5)
{
    var c = (a+b);
    // return c;
    console.log(c);
}
add(a,b);


//Rest parameter
let userFriends = function(username, ...Friends){
    console.log(username);
    console.log(Friends);

    for(let i in Friends)
    {
        console.log(Friends[i]);
    }
}
let username = "list of friends";

userFriends(username, 'john');
userFriends(username, 'john','doe');
*/

//Spread operator
let printCapitalNames= function(Names, ...Capital)
{
    console.log(Names);
    console.log();

    for(let i in Capital)
    {
        console.log(Capital[i]);
    }
}

let Names = "Capital names";
let CapitalArray = ["John","Paul","Martin","Meena","Harry"];
printCapitalNames(Names, ...CapitalArray)