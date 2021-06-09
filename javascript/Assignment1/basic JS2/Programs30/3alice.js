// var x = prompt("Enter your name");
function greet(a,b)
{
    if(a=="alice" && b=="bob")
    {
        document.write("good morning "+a," "+ b);
    }
    else{
        document.write(a ,b);
    }
}
greet("alice", "bob");