function prepararCadastro() {
	document.getElementById('eixoX').value = '';
	document.getElementById('eixoY').value = '';
	document.getElementById('classe').value = '';
}

function cadastrar() {
	eixoX.push(document.getElementById('eixoX').value.toString().trim());
	eixoY.push(document.getElementById('eixoY').value.toString().trim());
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
	opcoesSelect();
}

function opcoesSelect() {
	const arrayOpcoesX = eliminaDuplicados(eixoX);
	const arrayOpcoesY = eliminaDuplicados(eixoY);

	let laco = [];
	if(arrayOpcoesX.length > arrayOpcoesY.length) laco = arrayOpcoesX;
	else laco = arrayOpcoesY;

	let opcoesX = "<option value=''></option>";
	let opcoesY = "<option value=''></option>";
	for(let i=0; i<laco.length; i++) {
		if(arrayOpcoesX[i] != undefined) {
			opcoesX += `<option value='${arrayOpcoesX[i]}'>${arrayOpcoesX[i]}</option>`;
		}

		if(arrayOpcoesY[i] != undefined) {
			opcoesY += `<option value='${arrayOpcoesY[i]}'>${arrayOpcoesY[i]}</option>`;
		}
	}

	document.getElementById('entradaX').innerHTML = opcoesX;
	document.getElementById('entradaY').innerHTML = opcoesY;
}

function retornaClasse() {
	train({x: eixoX, y: eixoY, class: classe});
	const entradaX = document.getElementById('entradaX').value.toString().trim();
	const entradaY = document.getElementById('entradaY').value.toString().trim();
	const result = predict(entradaX, entradaY);
	document.getElementById('entradaC').value = result;
}
