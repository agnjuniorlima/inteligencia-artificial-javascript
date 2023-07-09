const PolynomialRegression = require('ml-regression-polynomial');

const x = [1, 2, 3, 4, 5];
const y = [10, 20, 30, 40, 50];
const degree = 1;

const regression = new PolynomialRegression(x, y, degree);

let output = regression.predict(6);
output = output.toFixed(0);
console.log(output);
