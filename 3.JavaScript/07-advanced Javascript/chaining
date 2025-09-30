let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello"); // start with a string
    }, 1000);
});

p.then((msg) => {
    console.log("Step 1:", msg); 
    return msg + " World"; 
})
.then((msg) => {
    console.log("Step 2:", msg); 
    return msg + " from Promise"; 
})
.then((msg) => {
    console.log("Step 3:", msg); 
    return msg.toUpperCase(); 
})
.then((msg) => {
    console.log("Final Result:", msg); 
});


let pro= new Promise((resolve) => {
    setTimeout(() => {
        console.log("Abdul");
        resolve();
    }, 1000);
});

p.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Ahad");
            resolve();
        }, 1000);
    });
})
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Irsad");
            resolve();
        }, 1000);
    });
})
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Sadia");
            resolve();
        }, 1000);
    });
})
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Akif");
            resolve();
        }, 1000);
    });
})
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Arsh");
            resolve();
        }, 1000);
    });
})
.then(() => {
    console.log("✅ All names printed");
});
