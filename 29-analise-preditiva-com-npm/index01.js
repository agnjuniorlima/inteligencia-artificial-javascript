const synaptic = require('synaptic');

const inputLayer = new synaptic.Layer(2);
const outputLayer = new synaptic.Layer(1);

inputLayer.project(outputLayer);

const NeuralNetwork = new synaptic.Network({
	input: inputLayer,
	output: outputLayer
});

const learningRate = .5;
for(let i=0; i<2000; i++) {
	NeuralNetwork.activate([0, 0]);
	NeuralNetwork.propagate(learningRate, [0]);

	NeuralNetwork.activate([0, 1]);
	NeuralNetwork.propagate(learningRate, [0]);

	NeuralNetwork.activate([1, 0]);
	NeuralNetwork.propagate(learningRate, [0]);

	NeuralNetwork.activate([1, 1]);
	NeuralNetwork.propagate(learningRate, [1]);
}

const output00 = parseFloat(NeuralNetwork.activate([0, 0])).toFixed(0);
const output01 = parseFloat(NeuralNetwork.activate([0, 1])).toFixed(0);
const output10 = parseFloat(NeuralNetwork.activate([1, 0])).toFixed(0);
const output11 = parseFloat(NeuralNetwork.activate([1, 1])).toFixed(0);

console.log(`0 and 0: ${output00}`);
console.log(`0 and 1: ${output01}`);
console.log(`1 and 0: ${output10}`);
console.log(`1 and 1: ${output11}`);
