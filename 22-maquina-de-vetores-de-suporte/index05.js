const SVM = require('inferrer');

const svm = new SVM();

svm.train([
	{input: [10, 11], classification: -1},
	{input: [12, 13], classification: -1},
	{input: [50, 70], classification:  1},
	{input: [80, 90], classification:  1}
]);

const list = [[12, 12], [13, 14], [55, 70], [67, 88]];
const outputs = svm.classifyList(list);

console.log(outputs);
