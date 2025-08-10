// AND (&&) → দুইটাই true হতে হবে
console.log(true && true);   // true
console.log(true && false);  // false

// OR (||) → যেকোনো একটা true হলেই হবে
console.log(true || false);  // true
console.log(false || false); // false

// NOT (!) → ফলাফল উল্টে দেয়
console.log(!true);  // false
console.log(!false); // true

// শর্তে ব্যবহার
let age = 20;
let hasID = true;

console.log(age >= 18 && hasID); // true  (দুটো শর্তই মিলে গেছে)
console.log(age < 18 || hasID);  // true  (একটা শর্ত মিলে গেছে)
console.log(!(age >= 18));       // false (কারণ age 18 বা তার বেশি)
