const r = require('js-regression');

const logistic = new r.LogisticRegression({iterations: 5});

const inputs = [[1, 1, 1], [1, 2, 2], [2, 2, 2], [5, 5, 5], [7, 5, 8], [8, 7, 9]];
const outputs = [0, 0, 0, 1, 1, 1];

logistic.fit(inputs, outputs);

const input1 = [2, 1, 0];
const input2 = [8, 8, 8];

const output1 = logistic.transform(input1) < 0.65 ? 0 : 1;
const output2 = logistic.transform(input2) < 0.65 ? 0 : 1;

console.log(`${output1}:`, input1);
console.log(`${output2}:`, input2);
