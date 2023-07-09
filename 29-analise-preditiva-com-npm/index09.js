const brain = require('brain.js');
const fs = require('fs');

const net = new brain.NeuralNetwork();

net.train([
	{input: [0, 0], output: [0]},
	{input: [0, 1], output: [1]},
	{input: [1, 0], output: [1]},
	{input: [1, 1], output: [0]}
]);

const json = net.toJSON();
const path = './model-xor.json';
fs.writeFileSync(path, JSON.stringify(json));
if(fs.existsSync(path)) console.log('modelo salvo com sucesso.');
