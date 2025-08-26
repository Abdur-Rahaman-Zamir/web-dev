
for (let i = 0; i < 205; i++) {
    console.log(i + 1);
}

//for in loop

let obj = {
    Akif: 22,
    Ali: 23,
    Ahmed: 24,
    Abdullah: 25,
    Arshad: 26,
}
for (let a in obj) {
    console.log("Marks of " + a + " are " + obj[a]);
}

//Example 1: Object properties ঘোরা

let student = {
    name: " Akif",
    age: 6,
    village: " Naikanda"


};
for (let key in student) {
    console.log(key + " = " + student[key]);
} 

//for of loop
let numbers = new Set([1, 2, 3, 3, 4]);

for (let num of numbers) {
    console.log(num);

}

//2 for of loop

let students = new Map([
    ["Rahman", 26],
    ["Zamir", 27],
    ["Hasan", 25]
]);

for (let [name, age] of students) {
    console.log(name, "=", age);
}


