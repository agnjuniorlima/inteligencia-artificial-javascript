const mlr = require('ml-regression-multivariate-linear');

const x = [[10, 12, 14], [22, 24, 50], [50, 80, 30], [40, 10, 14]];
const y = [[5, 6, 7], [11, 12, 25], [25, 40, 15], [20, 5, 7]];

const regression = new mlr(x, y);

const result = regression.predict([12, 20, 30]);
let output = [];
for(let i=0; i<result.length; i++) {
	output.push(Number(parseFloat(result[i]).toFixed(0)));
}
console.log(output);
