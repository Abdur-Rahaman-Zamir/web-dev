//normally use

let user=["zamir",27,"kolkata"];
let[name,age,city]=user;
console.log(name)
console.log(age)
console.log(city)

// set as default value

let person = ["abdullah", , "malda"];

let [username, userAge = 20, location] = person;

console.log(username);  
console.log(userAge);   
console.log(location); 

//nested array

let student =["yasa",2, "naikanda",["five",625]];
let[boyname,boyAge,boyArea,[className,marks]]= student;


console.log(boyname);  
console.log(boyAge);   
console.log(boyArea);
console.log(className);  
console.log(marks);   

// use with Rest Operator

let number = [90, 85, 88, 70, 60];

let [top1, top2, ...others] =number;

console.log(top1);   
console.log(top2);   
console.log(others);  

//showing destructuring in function."


function showStudent([name, age, area, [cls, marks]]) {
 console.log(`Name: ${name},
     Age: ${age}, 
     Area: ${area}, 
     Class: ${cls}, 
     Marks: ${marks}`);
}

let firstBoy = ["Yasa", 22, "Naikanda", ["Five", 390]];

showStudent(firstBoy);
