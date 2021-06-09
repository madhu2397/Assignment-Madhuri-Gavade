var no = prompt("Enter a number");
if (no == 0 || no == 1) {
  console.log(no + " " + "is not a prime number");
}
{
  for (var i = 2; i <= no/2; i++)
   {
    if (no % 2 == 0)
     {
      console.log( "not prime number");
    }
    else{
        console.log(("prime number"));
    }
  }
}
