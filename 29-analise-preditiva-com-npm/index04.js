const synaptic = require('synaptic');

const inputLayer = new synaptic.Layer(1);
const hiddenLayer = new synaptic.Layer(5);
const outputLayer = new synaptic.Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

const NeuralNetwork = new synaptic.Network({
	input: inputLayer,
	hidden: [hiddenLayer],
	output: outputLayer
});

const learningRate = 1.5;
for(let i=0; i<6000; i++) {
	NeuralNetwork.activate([1]);
	NeuralNetwork.propagate(learningRate, [0.1]);

	NeuralNetwork.activate([2]);
	NeuralNetwork.propagate(learningRate, [0.2]);

	NeuralNetwork.activate([3]);
	NeuralNetwork.propagate(learningRate, [0.3]);

	NeuralNetwork.activate([4]);
	NeuralNetwork.propagate(learningRate, [0.4]);
}

const output = Math.ceil(NeuralNetwork.activate([5])*100);
console.log(output);
