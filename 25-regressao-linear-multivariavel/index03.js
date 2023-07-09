const mlr = require('ml-regression-multivariate-linear');

const x = [[2], [4], [8], [10]];
const y = [[1, 1], [2, 2], [4, 4], [5, 5]];

const regression = new mlr(x, y);

const result = regression.predict([12]);
let output = [];
for(let i=0; i<result.length; i++) {
	output.push(Number(parseFloat(result[i]).toFixed(0)));
}
console.log(output);
