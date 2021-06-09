//1. Make a Rectangle class that stores ...... and print out the results again.
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
};
let rectangleOne = new Rectangle(30, 20);
console.log("Initial: ", rectangleOne);
rectangleOne.height = 12;
console.log("Modified: ", rectangleOne);

//2. Add a getArea method. Use the prototype property.
Rectangle.prototype.getArea = function() {
    return this.height * this.width;
}
let rectangleTwo = new Rectangle(30, 20);
console.log("Width:", rectangleTwo.width);
console.log("Height: ", rectangleTwo.height);
console.log("Area: ", rectangleTwo.getArea());

//3. Assuming that the Rectangle constructor ...... output 20 instead of 200?
let r = new Rectangle(4, 5);
r.hieght = 50;
console.log(r.getArea());
/* r.getArea() returns 20 instead of 200, since no property of Object "r" was changed and default values passed
were calculated by the method. "height" was not altered, instead a new property "hieght" was added to the
Object "r" */

//4. Make a variable whose value is an object ...... JavaScript programmers do this sort of thing all the time.
let personOne = {
    firstName: "Joe",
    lastName: "Blake"
};
console.log(`Full name: ${personOne.firstName} ${personOne.lastName}`);
personOne.lastName = "Heusmann";
console.log(`Changed name: ${personOne.firstName} ${personOne.lastName}`);

//5. Try reading the middleName property ...... a good thing or a bad thing?
console.log(`Middle name (before defining): ${personOne.middleName}`);
personOne.middleName = "Martin";
console.log(`Middle name (after defining): ${personOne.middleName}`);
//NOTE: ! Why to be answered !

//6. Create a string that contains what looks ...... previous object that you created directly.
let personTwo = "{firstName: 'John', lastName: 'Smith'}";
console.log(personTwo);
console.log(eval('(' + personTwo + ')'));

//7. Do the same with JSON.parse. You have to follow strict JSON rules in this case.
let personThreeObject = JSON.parse('{"firstName":"Joe", "lastName":"Kelly"}');
console.log(personThreeObject);