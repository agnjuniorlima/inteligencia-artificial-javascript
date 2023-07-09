const mlr = require('ml-regression-multivariate-linear');

const x = [[1], [2], [3], [4]];
const y = [[9], [18], [27], [36]];

const regression = new mlr(x, y);

const result = regression.predict([5]);
let output = [];
for(let i=0; i<result.length; i++) {
	output.push(Number(parseFloat(result[i]).toFixed(0)));
}
console.log(output);
