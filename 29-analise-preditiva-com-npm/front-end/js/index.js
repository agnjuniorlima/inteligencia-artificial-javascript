function executar() {
	const net = new brain.NeuralNetwork();

	net.train([
		{input: [0, 0], output: [0]},
		{input: [0, 1], output: [1]},
		{input: [1, 0], output: [1]},
		{input: [1, 1], output: [0]}
	]);

	const entrada1 = Number(document.getElementById('entrada1').value);
	const entrada2 = Number(document.getElementById('entrada2').value);

	const output = parseFloat(net.run([entrada1, entrada2])).toFixed(0);
	document.getElementById('saida').value = output;
}
