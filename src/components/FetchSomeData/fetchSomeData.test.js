// api.test.js

const fetchSomeData = require('./fetchSomeData');

test('fetchData success with the correct data', () => {
    return fetchSomeData().then((data) => {
        expect(data).toEqual({ data: 'Mock data' });
    });
});

test('fetchData success with the correct data using async/await', async () => {
    const data = await fetchSomeData();
    expect(data).toEqual({ data: 'Mock data' });
});

test('fetchData success with the correct data using resolves', () => {
    return expect(fetchSomeData()).resolves.toEqual({ data: 'Mock data' });
});