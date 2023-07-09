function executar() {
	const area = Number(document.getElementById('area').value);

	const result = linearRegression(
		[45, 50, 75, 100, area], 
		[225000, 250000, 375000, 500000]
	);

	document.getElementById('preco').value = parseFloat(result[0]).toFixed(0);
}
