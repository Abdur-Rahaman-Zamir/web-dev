const person = {
  name: "Abdur Rahman",
  age: 26,
  
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); 