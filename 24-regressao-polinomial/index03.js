const PolynomialRegression = require('ml-regression-polynomial');

const x = [1, 2, 3, 4, 5];
const y = [11, 22, 33, 44, 55];
const degree = 1;

const regression = new PolynomialRegression(x, y, degree);

let output = regression.predict(6);
output = output.toFixed(0);
console.log(output);
