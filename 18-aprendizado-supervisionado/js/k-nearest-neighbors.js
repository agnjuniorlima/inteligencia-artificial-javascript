document.getElementById('sim').checked = true;
let seguranca = 'sim';
function setSeguranca(value='sim') { seguranca = value.toString().toLowerCase().trim(); }

function prepararCadastro() {
	document.getElementById('eixoX').value = 1;
	document.getElementById('eixoY').value = 0;
}

function cadastrar() {
	eixoX.push(Number(document.getElementById('eixoX').value));
	eixoY.push(Number(document.getElementById('eixoY').value));
	let seguro = 'SEGURO';
	if(seguranca=='não') seguro = 'NAO seguro';
	classe.push(seguro);

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
