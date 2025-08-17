// 1. Simple arrow function
const greet = () => {
    console.log("Hello World!");
};
greet(); // Calling the arrow function

// 2. With parameters
const greetUser = (name) => {
    console.log("hello," + name + "!");
};
greetUser("akif ahmed");

// 3. Arrow function with return
const square = (x) => {
    return x * x
};
console.log(square(25));

// 4. Shortest form (when only 1 line return)
const multiply = (a, b) => a * b;
console.log(multiply(5, 8));