const synaptic = require('synaptic');

const inputLayer = new synaptic.Layer(1);
const hiddenLayer1 = new synaptic.Layer(2);
const hiddenLayer2 = new synaptic.Layer(4);
const outputLayer = new synaptic.Layer(1);

inputLayer.project(hiddenLayer1);
hiddenLayer1.project(hiddenLayer2);
hiddenLayer2.project(outputLayer);

const NeuralNetwork = new synaptic.Network({
	input: inputLayer,
	hidden: [hiddenLayer1, hiddenLayer2],
	output: outputLayer
});

function formatOutput(n=0) { return n/100; }

const learningRate = .5;
for(let i=0; i<2000; i++) {
	NeuralNetwork.activate([1]);
	NeuralNetwork.propagate(learningRate, [formatOutput(9)]);

	NeuralNetwork.activate([2]);
	NeuralNetwork.propagate(learningRate, [formatOutput(18)]);

	NeuralNetwork.activate([3]);
	NeuralNetwork.propagate(learningRate, [formatOutput(27)]);

	NeuralNetwork.activate([4]);
	NeuralNetwork.propagate(learningRate, [formatOutput(36)]);
}

const output = parseFloat(NeuralNetwork.activate([5])*100).toFixed(0);
console.log(`entrada 5, padrão: ${output}`);
