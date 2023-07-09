const brain = require('brain.js');

const net = new brain.recurrent.RNN();

net.train([
	{input: [0], output: [1]},
	{input: [1], output: [0]}
], {iterations: 2000});

const output0 = parseFloat(net.run([0])).toFixed(0);
const output1 = parseFloat(net.run([1])).toFixed(0);

console.log(`not 0: ${output0}`);
console.log(`not 1: ${output1}`);
