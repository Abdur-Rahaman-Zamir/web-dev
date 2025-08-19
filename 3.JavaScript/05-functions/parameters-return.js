//1. Function Parameters

function greet(name) {
    console.log("hello," + name + "!");
}
greet("zamir");
greet("yeaspia");
greet("doughter of zamir");


//2. Multiple Parameters

function add(a, b)  // a and b are Parameters
{
    console.log("the sum is:", a + b);
}
add(58, 2);
add(100, 200);
add(1000, 2000);
add(10000, 20000);

//3. Return Value:

function add(a, b) {
    return a - b;   // return মান ফেরত দিলো
}

let result = add(10, 5);
console.log(result);

//3.2 

function square(n) {
    return n * n;
}
console.log(square(10));
let num = square(25);
console.log(num + 25);

//4. Example: Combine Parameters + Return

function fullName(firstName, lastName) {
    return (firstName + "" + lastName);
}
let name = fullName("yeaspia", "haziz");
console.log("your full name is:", name);

//4.1. Calculate Area of a Rectangle

function rectangleArea(length, width) {
    return length * width;
}

let area = rectangleArea(10, 5);
console.log("The area of rectangle is:", area);

//4.2Find Average of Three Numbers

function average(a, b, c, d, e) {
    return (a + b + c + d + e) / 5 ;
}

let avg = average (5, 2, 85, 52, 5);
console.log("the average is:", avg);