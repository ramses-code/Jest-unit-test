// Import functions to be tested
const {fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

test('One euro should be 1.206 dollars', () => {
    expect(fromEuroToDollar(5)).toBe(6); 
});

test('One dollar should be 106.58', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(106.58); 
});

test('One yen should be 0.0062', () => {
    expect(fromYenToPound(1)).toBeCloseTo(0.0062); 
});