var no = prompt("enter a number");
var result = 0;
for(i=0; i<=no; i++)
{
    if(i%2!==0)
    {
        result = result + i;
    }
}
console.log(result);