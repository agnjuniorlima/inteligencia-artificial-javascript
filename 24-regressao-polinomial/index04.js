const PolynomialRegression = require('ml-regression-polynomial');

const x = [2.37, 1, 0.55, 1.1, 0.5];
const y = [237, 100, 55, 110, 50];
const degree = 1;

const regression = new PolynomialRegression(x, y, degree);

let output = regression.predict(0.6);
output = output.toFixed(0);
console.log(output);
