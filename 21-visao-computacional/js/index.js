function abrir() {
	let preview = document.getElementById('imagem');
	const file = document.querySelector('input[type=file]').files[0];
	const reader = new FileReader();

	if(file) reader.readAsDataURL(file);
	else preview.src = '';

	reader.onloadend = function() {
		preview.src = reader.result;
	}

	document.getElementById('resultado').innerText = '...';
}

function prever() {
	const imagem = document.getElementById('imagem');
	const resultado = document.getElementById('resultado');
	const probabilidades = document.getElementById('probabilidades');

	const classifier = ml5.imageClassifier('MobileNet', function() {
		resultado.innerText = 'processando...';
	});

	classifier.predict(imagem, function(err, results) {
		if(err) console.log(err);

		const classe1 = results[0].className;
		const classe2 = results[1].className;
		const classe3 = results[2].className;

		resultado.innerText = 'CLASSIFICAÇAO: ' + classe1.toUpperCase();

		const probabilidade1 = parseFloat(results[0].probability*100).toFixed(2);
		const probabilidade2 = parseFloat(results[1].probability*100).toFixed(2);
		const probabilidade3 = parseFloat(results[2].probability*100).toFixed(2);

		const r1 = `${classe1}\r\nprobabilidade: ${probabilidade1}%`;
		const r2 = `${classe2}\r\nprobabilidade: ${probabilidade2}%`;
		const r3 = `${classe3}\r\nprobabilidade: ${probabilidade3}%`;

		probabilidades.innerHTML = r1 + '\r\n' + r2 + '\r\n' + r3;
	});
}
