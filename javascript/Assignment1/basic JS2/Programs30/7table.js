var no = prompt("Enter number");
var table = 1;
if(no<=12)
{
    var i=1;
    while(i<=10)
    {
        table = (no*i);
        console.log(table);
        i++;
    }
}
else{
    console.log("Enter no between 1 to 12");
}