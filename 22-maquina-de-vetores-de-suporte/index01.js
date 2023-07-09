const SVM = require('inferrer');

const svm = new SVM();

svm.train([
	{input: [1, 2],   classification: -1},
	{input: [3, 4],   classification: -1},
	{input: [10, 20], classification:  1},
	{input: [30, 40], classification:  1}
]);

const input1 = [2, 3];
const input2 = [15, 25];

const output1 = svm.classify(input1) == -1 ? 'menor' : 'maior';
const output2 = svm.classify(input2) == -1 ? 'menor' : 'maior';

console.log(`${output1}:`);
console.log(input1);
console.log();
console.log(`${output2}:`);
console.log(input2);
