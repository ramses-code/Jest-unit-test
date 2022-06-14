// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(euro) {
    return euro * oneEuroIs.USD;
}

function fromDollarToYen(dollar) {
    return (oneEuroIs.JPY / oneEuroIs.USD) * dollar;
}

function fromYenToPound(yen) {
    return (oneEuroIs.GBP / oneEuroIs.JPY) * yen;
}

console.log(fromEuroToDollar(5));
console.log(fromDollarToYen(5));
console.log(fromYenToPound(5));

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound};