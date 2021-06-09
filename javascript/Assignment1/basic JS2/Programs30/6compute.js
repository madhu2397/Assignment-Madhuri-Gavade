//Computing sum & multiply
var no = prompt("Enter a number");
var method = prompt("Enter method sum or multiply")
if(method == "sum" )
{
    var res = 0;
    for(var i=1; i<=no; i++)
    {
        res = res+i;
    }
    console.log(res);
}
else if(method == "multiply"){
    var res = 1;
    for(var i = 1; i<=no; i++)
    {
        res = res*i;
    }
    console.log(res);
}
else{
    console.log("CHoose method sum or multiply");
}