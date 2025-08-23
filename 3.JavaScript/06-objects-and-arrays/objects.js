//What is an Object?
//In JavaScript, an object is a collection of properties.
//Each property has a key (name) and a value.

let person = {
    name: "abdullah",
    age: 27,
    profession: "developer"
};
console.log(person);
console.log(person.name); //Accessing property using dot notation
console.log(person["age"]);//Accessing property using bracket notation
console.log(person.profession);
//Adding a new property
person.city = "makkaha";
console.log(person.city);
//Modifying an existing property    
person.age = 28;
console.log(person.age);
//Deleting a property
delete person.profession;
console.log(person);
//Iterating over properties`    
for (let key in person) {
    console.log(key + ":" + person[key]);
}
//Object with Methods (functions inside objects)
let car = {
    brand: "toyota",
    model: "corolla",
start: function () {
        console.log("The car has started");

    }
};
car.start();