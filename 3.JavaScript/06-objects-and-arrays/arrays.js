//What is an Array?
//An array is a special type of object used to store multiple values in a single variable. 
let fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits);

//Accessing elements using index

console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[3]);

//Length of the array

console.log(fruits.length);

//Changing Array Values

fruits[0] = "nashpati";
console.log(fruits);

//Adding elements to the array

fruits.push("grapes");
console.log(fruits);

//Removing Elements

fruits.pop();
console.log(fruits); //removes the last element

fruits.shift();
console.log(fruits);  //removes the first element

//Looping through an Array

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


//Example: Numbers Array

let number = [5, 8, 56, 8, 6, 9, 4];
console.log(number);

for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}
number[4] = 0;
console.log(number);

number.push(99);
console.log(number);

console.log(number.length);

console.log(number[5]);

number.pop();
console.log(number);

number.shift();
console.log(number);


}