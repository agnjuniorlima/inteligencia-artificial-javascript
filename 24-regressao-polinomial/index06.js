const PolynomialRegression = require('ml-regression-polynomial');

const x = [10, 7, 28, 4, 33];
const y = [2, 15, 9, 24, 10];
const degree = 9;

const regression = new PolynomialRegression(x, y, degree);

let output = regression.predict(6);
output = output.toFixed(0);
console.log(output);
