const SVM = require('inferrer');

const svm = new SVM({kernel: 'gaussian', gamma: 0.6});

svm.train([
	{input: [0, 0], classification: -1},
	{input: [0, 1], classification:  1},
	{input: [1, 0], classification:  1},
	{input: [1, 1], classification:  1}
]);

const output00 = svm.classify([0, 0]) == -1 ? 0 : 1;
const output01 = svm.classify([0, 1]) == -1 ? 0 : 1;
const output10 = svm.classify([1, 0]) == -1 ? 0 : 1;
const output11 = svm.classify([1, 1]) == -1 ? 0 : 1;

console.log(`0 or 0: ${output00}`);
console.log(`0 or 1: ${output01}`);
console.log(`1 or 0: ${output10}`);
console.log(`1 or 1: ${output11}`);
