async function zamir() {
    let kolkataWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27° C");
        }, 2000);
    });
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("35° C");
        }, 4000);
    });     
console.log("Fetching Kolkata Weather...");
    let kolkataW = await kolkataWeather;
    console.log("Kolkata Weather is: " + kolkataW);
    console.log("Fetching Delhi Weather...");
    let delhiW = await delhiWeather;
    console.log("Delhi Weather is: " + delhiW);
    return [kolkataW, delhiW];

}

console.log("Welcome to Weather Forecasting");
let a = zamir();
a.then((value) => {
    console.log(value);
});
