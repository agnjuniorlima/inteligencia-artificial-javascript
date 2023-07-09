const Mind = require('node-mind');

const config = {
	iterations: 5000,
	learningRate: .7,
	activator: 'sigmoid', // htan
	hiddenLayers: 1,
	hiddenUnits: 4
};

const mind = new Mind(config);

mind.learn([
	{input: [0, 0], output: [0]},
	{input: [0, 1], output: [1]},
	{input: [1, 0], output: [1]},
	{input: [1, 1], output: [0]}
]);

const output00 = parseFloat(mind.predict([0, 0])).toFixed(0);
const output01 = parseFloat(mind.predict([0, 1])).toFixed(0);
const output10 = parseFloat(mind.predict([1, 0])).toFixed(0);
const output11 = parseFloat(mind.predict([1, 1])).toFixed(0);

console.log(`0 xor 0: ${output00}`);
console.log(`0 xor 1: ${output01}`);
console.log(`1 xor 0: ${output10}`);
console.log(`1 xor 1: ${output11}`);
