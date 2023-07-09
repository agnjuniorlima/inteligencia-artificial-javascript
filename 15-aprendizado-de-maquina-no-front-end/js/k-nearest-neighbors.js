function prepararCadastro() {
	document.getElementById('eixoX').value = '';
	document.getElementById('eixoY').value = '';
	document.getElementById('classe').value = '';
}

function cadastrar() {
	eixoX.push(Number(document.getElementById('eixoX').value));
	eixoY.push(Number(document.getElementById('eixoY').value));
	classe.push(document.getElementById('classe').value.toString().trim());

	let linhas = '';
	for(let i=0; i<eixoX.length; i++) {
		linhas +=
		"<tr>" +
			"<td>" + eixoX[i] + "</td>" +
			"<td>" + eixoY[i] + "</td>" +
			"<td>" + classe[i] + "</td>" +
		"</tr>";	
	}

	document.getElementById('linhas').innerHTML = linhas;
}

function retornaClasse() {
	train({x: eixoX, y: eixoY, class: classe});
	const entradaX = Number(document.getElementById('entradaX').value);
	const entradaY = Number(document.getElementById('entradaY').value);
	const result = predict(entradaX, entradaY);
	document.getElementById('entradaC').value = result;
}
