const mlr = require('ml-regression-multivariate-linear');

const x = [[1, 2], [2, 3], [3, 4], [4, 5]];
const y = [[3], [5], [7], [9]];

const regression = new mlr(x, y);

const result = regression.predict([5, 6]);
let output = [];
for(let i=0; i<result.length; i++) {
	output.push(Number(parseFloat(result[i]).toFixed(0)));
}
console.log(output);
