console.log("=== CALLBACKS ===");

function first() {
    console.log('1');
}

function second(callback) {
    setTimeout(() => {
        console.log('2');
        callback();
    }, 5000);
}

function third() {
    console.log('3');
}

first();
second(third);

