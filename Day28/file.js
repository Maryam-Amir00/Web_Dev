
let myPromise = new Promise((resolve, reject) => {
    let success = true; 

    if (!success) {
        resolve("✅ Operation was successful!");
    } else {
        reject("❌ Something went wrong!");
    }
});


myPromise
    .then((message) => {
        console.log("THEN:", message); 
    })
    .catch((error) => {
        console.log("CATCH:", error); 
    });
