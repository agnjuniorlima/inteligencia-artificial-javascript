const NeuralNetwork = require('./NeuralNetwork');
const math = require('mathjs');

const config = {
	input_nodes: 2,
	hidden_nodes: 4,
	output_nodes: 1,
	epochs: 100000,
	learning_rate: 0.5
};


const net = new NeuralNetwork(config);
const input = math.matrix([[0, 0], [0, 1], [1, 0], [1, 1]]);
const target = math.matrix([[0], [1], [1], [0]]);
net.train(input, target);

console.log();

console.log(`0 xor 0: ${parseFloat(net.predict([0, 0])._data).toFixed(13)}`);
console.log(`0 xor 1: ${parseFloat(net.predict([0, 1])._data).toFixed(13)}`);
console.log(`1 xor 0: ${parseFloat(net.predict([1, 0])._data).toFixed(13)}`);
console.log(`1 xor 1: ${parseFloat(net.predict([1, 1])._data).toFixed(13)}`);
