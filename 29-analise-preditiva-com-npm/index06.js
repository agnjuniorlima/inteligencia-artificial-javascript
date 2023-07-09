const brain = require('brain.js');

const net = new brain.NeuralNetwork();

net.train([
	{input: [0, 0], output: [0]},
	{input: [0, 1], output: [1]},
	{input: [1, 0], output: [1]},
	{input: [1, 1], output: [1]}
]);

const output00 = parseFloat(net.run([0, 0])).toFixed(0);
const output01 = parseFloat(net.run([0, 1])).toFixed(0);
const output10 = parseFloat(net.run([1, 0])).toFixed(0);
const output11 = parseFloat(net.run([1, 1])).toFixed(0);

console.log(`0 or 0: ${output00}`);
console.log(`0 or 1: ${output01}`);
console.log(`1 or 0: ${output10}`);
console.log(`1 or 1: ${output11}`);
