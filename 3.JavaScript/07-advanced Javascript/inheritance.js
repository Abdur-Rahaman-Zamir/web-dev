class employee {
    constructor(name) {
        this.empname = name;
        console.log("constructor : Employee");

    }
    info() {
        console.log("Employee name : " + this.empname);

    }
}
class manager extends employee {
    info() {

        console.log("Manager name : " + this.empname);
        super.info();
    }
}
let a = new employee("Zamir (Employee)");
let b = new manager("Abdullah (Employee");
a.info();