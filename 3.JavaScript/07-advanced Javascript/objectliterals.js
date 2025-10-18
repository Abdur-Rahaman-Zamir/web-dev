let name = "Zamir";
let age = 27;
let city = "Makkah";    

let obj={
    name,
    age,
    city,
};
console.log(obj)


//use variable as a property name

let n ="name";

let obj1 = {
    [n]:"zamir",
    course:"web development"
};
console.log(obj1);

//
let a = "student";

let obj2 = {
    [a + "name"]: "zamir",
    course: "web development",
    details:function() {
        return `${this[a + "name"]} is studying ${this.course}`;
    }
};

console.log(obj2);
console.log(obj2.details());

//new function syntex

let b = "student";

let obj3 = {
    [b + "name"]: "zamir",
    course: "web development",
    'details show'() {   // ES6 shorthand method
        return `${this[a + "name"]} is studying ${this.course}`;
    }
};
console.log(obj3);
console.log(obj3['details show']());  

//object literals

let name2= "abdullah"
let course2 = "java script"
 function student (name2, course2){
    return{name2,course2};
 }
 console.log(student(name2,course2))
// example 2
let fname = "abdur";
let lname = "rahman";
let course = "b.tech";

function student (fname,lname,course){
    let fullname = fname +" "+ lname;
    return {fullname,course};
}
console.log(student(fname,lname,course));
