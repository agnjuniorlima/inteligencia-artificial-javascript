const brain = require('brain.js');

const config = {
	hiddenLayers: [20],
	leaningRate: .5,
	activation: 'tanh' // sigmoid, relu, leaky-relu, tanh
};

const net = new brain.NeuralNetwork(config);

net.train([
	{input: [1], output: [0.1]},
	{input: [2], output: [0.2]},
	{input: [3], output: [0.3]},
	{input: [4], output: [0.4]}
]);

const output = parseFloat(net.run([5])).toFixed(1);
console.log(output);
