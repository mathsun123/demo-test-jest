function fetchSomeData() {
    return new Promise((resolve) => {
        // Simulate an asynchronous operation, e.g., fetching data from an API
        setTimeout(() => {
            resolve({ data: 'Mock data' });
        }, 1000);
    });
}

module.exports = fetchSomeData;