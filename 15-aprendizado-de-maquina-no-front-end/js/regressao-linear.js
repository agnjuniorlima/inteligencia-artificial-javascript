function executar() {
	const eixoX = document.getElementById('eixoX').value.toString().trim();
	const eixoY = document.getElementById('eixoY').value.toString().trim();

	let vetorX = eixoX.split(',');
	let vetorY = eixoY.split(',');

	vetorX = vetorX.map((element) => Number(element));
	vetorY = vetorY.map((element) => Number(element));

	let result = linearRegression(vetorX, vetorY);
	result = result.toString().replace(/,/g, ', ');

	document.getElementById('eixoY').value = result;
}
