function executar() {
	const net = new brain.NeuralNetwork();

	const json = str_json;
	net.fromJSON(JSON.parse(json));

	const entrada1 = Number(document.getElementById('entrada1').value);
	const entrada2 = Number(document.getElementById('entrada2').value);

	const output = parseFloat(net.run([entrada1, entrada2])).toFixed(0);
	document.getElementById('saida').value = output;
}
