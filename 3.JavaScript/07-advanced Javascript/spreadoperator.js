function sum(name, ...numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return `${name}, your total is ${total}`;
}
let arr =[10,20,30,]

console.log(sum("akif",...arr));

// spread operator in array with 

let arr1 = [1, 2, 3];
let arr2 = [...arr1]
arr1.push(50);
console.log(...arr2)
console.log(...arr1)

//spread operator in concat

let arr3 = [4, 5, 6];
let arr4 = [65,...arr1, ...arr3,55]
console.log(arr4)

//spread operator in object

let obj1 ={
    name:"akif",
    age:22,
    country:"india"
}
let obj2 = {
    course:"web development",
    city:"makkah"
}
let obj3 ={...obj1,...obj2}
console.log(obj3)