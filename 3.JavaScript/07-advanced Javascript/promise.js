let complete = true;

let prom = new Promise(function (resolve, reject) {
    if (complete) {
        resolve("Task completed");
    } else {
        reject("Task not completed");
    }
});

console.log(prom);


let p = new Promise((resolve, reject) => {
    let success = true; // change this to true/false to test

    setTimeout(() => {
        if (success) {
            resolve("Task completed successfully ✅");
        } else {
            reject("Task failed ❌");
        }
    }, 5000);
});

p.then((result) => {
    // This runs if resolve() is called
    console.log("Resolved:", result);
})
.catch((error) => {
    // This runs if reject() is called
    console.log("Rejected:", error);
});





