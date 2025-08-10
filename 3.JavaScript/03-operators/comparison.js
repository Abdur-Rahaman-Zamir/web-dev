const Arithmetic = require('arithmetic-js');
const calc = new Arithmetic();

// Basic comparisons
console.log(calc.evaluate("5 == 5"));   // true
console.log(calc.evaluate("5 != 3"));   // true
console.log(calc.evaluate("7 > 10"));   // false
console.log(calc.evaluate("3 < 8"));    // true
console.log(calc.evaluate("5 >= 5"));   // true
console.log(calc.evaluate("4 <= 6"));   // true

// With variables
console.log(calc.evaluate("x > y", { x: 10, y: 5 })); // true
console.log(calc.evaluate("age >= 18", { age: 16 })); // false
