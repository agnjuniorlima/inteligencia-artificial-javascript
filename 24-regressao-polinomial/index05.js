const PolynomialRegression = require('ml-regression-polynomial');

const x = [1, 2, 3, 4, 5];
const y = [10, 30, 60, 100, 150];
const degree = 2;

const regression = new PolynomialRegression(x, y, degree);

let output = regression.predict(6);
output = output.toFixed(0);
console.log(output);
