const SVM = require('inferrer');

const svm = new SVM();

svm.train([
	{input: [10, 11, 12], classification: -1},
	{input: [12, 13, 14], classification: -1},
	{input: [50, 70, 80], classification:  1},
	{input: [80, 90, 99], classification:  1}
]);

const list = [[12, 12, 12], [13, 14, 15], [55, 70, 95], [67, 88, 77]];
const outputs = svm.classifyList(list);

console.log(outputs);
