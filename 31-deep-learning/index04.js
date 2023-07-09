const synaptic = require('synaptic');

const inputLayer = new synaptic.Layer(3);
const hiddenLayer = new synaptic.Layer(6);
const outputLayer = new synaptic.Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

const NeuralNetwork = new synaptic.Network({
	input: inputLayer,
	hidden: [hiddenLayer],
	output: outputLayer
});

const learningRate = .5;
for(let i=0; i<2000; i++) {
	NeuralNetwork.activate([1, 2, 3]);
	NeuralNetwork.propagate(learningRate, [0]);

	NeuralNetwork.activate([4, 5, 6]);
	NeuralNetwork.propagate(learningRate, [0]);

	NeuralNetwork.activate([10, 20, 30]);
	NeuralNetwork.propagate(learningRate, [1]);

	NeuralNetwork.activate([40, 50, 60]);
	NeuralNetwork.propagate(learningRate, [1]);
}

const output = parseFloat(NeuralNetwork.activate([10, 20, 3])).toFixed(0);
console.log(output);
