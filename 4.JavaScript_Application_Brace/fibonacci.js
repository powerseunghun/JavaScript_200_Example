function fibonacci(num) {
    if (num <= 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

onmessage = function(e) {
    const num = e.data.num;
    console.log('main script message', e.data);
    if (num == null || num === "") {
        throw new Error('not number');
    }
    const result = fibonacci(num);
    postMessage(result);
}