function executar() {
	const entrada1 = Number(document.getElementById('entrada1').value);
	const entrada2 = Number(document.getElementById('entrada2').value);
	train([
			{input: [1.56, 50], output: [0]},
			{input: [1.56, 54], output: [1]},
			{input: [1.56, 58], output: [0]},

			{input: [1.60, 53], output: [0]},
			{input: [1.60, 56], output: [1]},
			{input: [1.60, 61], output: [0]},

			{input: [1.65, 55], output: [0]},
			{input: [1.65, 60], output: [1]},
			{input: [1.65, 64], output: [0]},

			{input: [1.70, 60], output: [0]},
			{input: [1.70, 63], output: [1]},
			{input: [1.70, 68], output: [0]},

			{input: [1.75, 63], output: [0]},
			{input: [1.75, 67], output: [1]},
			{input: [1.75, 72], output: [0]},

			{input: [1.80, 67], output: [0]},
			{input: [1.80, 71], output: [1]},
			{input: [1.80, 76], output: [0]},

			{input: [1.85, 71], output: [0]},
			{input: [1.85, 75], output: [1]},
			{input: [1.85, 81], output: [0]},

			{input: [1.90, 74], output: [0]},
			{input: [1.90, 78], output: [1]},
			{input: [1.90, 84], output: [0]}
	]);
	let result = predict([entrada1, entrada2]);
	result = parseFloat(result).toFixed(0);
	if(result<1) result = 'peso NAO ideal'; else result = 'peso IDEAL';
	document.getElementById('predicao').value = result;
}
