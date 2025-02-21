// Creating a promise
let myPromise = new Promise((resolve, reject) => {
    let success = true; // Change to false to trigger reject

    if (!success) {
        resolve("✅ Operation was successful!");
    } else {
        reject("❌ Something went wrong!");
    }
});


