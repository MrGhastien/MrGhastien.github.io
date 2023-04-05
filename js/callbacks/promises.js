console.log("=== PROMISES ===");

const promise = new Promise((resolve, reject) => setTimeout(() => {
    if(0 == 1)
        resolve(true);
    else
        reject("gaming");
}, 5000));

promise.then((result) => console.log("Success ! Result : " + result), (error) => console.log("Failure ! Reason : " + error));

