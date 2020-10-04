let count = 0;

const timer = setInterval(() => {
    console.log(`Function Exec Count : ${count++}`);
}, 1000);

// clearInterval(timer);