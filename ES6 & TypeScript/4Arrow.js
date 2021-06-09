let names = ['tom','Ivan','Jerry'];
let convertToObject = (names)=>{
    let nameAndlength =[];
    for(n of names)
    {
        nameAndlength.push({
            name:n,
            length:n.length
        });
    console.log(nameAndlength);
}}
convertToObject(names);