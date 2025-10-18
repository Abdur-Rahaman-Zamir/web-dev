
var a = "hello";
var a = "world"; // No error
console.log(a); 

let b = "hello";
//let b = "world"; // Error: Identifier 'b' has already been declaredlet
b = "world"; // No error

console.log(b);

const c = "hello";
//const c = "world"; // Error: Identifier 'c' has already been declared 
//c = "world"; // Error: Assignment to constant variable.
console.log(c);