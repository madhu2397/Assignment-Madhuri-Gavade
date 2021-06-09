
//object
let Order={
    id: 1,
    title: "book",
    price: 200,
    printOrder(){},
    getPrice(){}
}
let MainOrder= Object.assign(Order);
console.log(MainOrder);
