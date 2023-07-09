document.getElementById('sim').checked = true;
let chuva = 'sim';
function setChuva(value='sim') { chuva = value.toString().toLowerCase().trim(); }

function cadastrar() {
	eixoX.push(document.getElementById('tempo').value.toString().trim());
	eixoY.push(document.getElementById('umidade').value.toString().trim());
	classe.push(chuva.toUpperCase());

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

	document.getElementById('selTempo').innerHTML = opcoesX;
	document.getElementById('selUmidade').innerHTML = opcoesY;
}

function retornaClasse() {
	train({x: eixoX, y: eixoY, class: classe});
	const entradaX = document.getElementById('selTempo').value.toString().trim();
	const entradaY = document.getElementById('selUmidade').value.toString().trim();
	const result = predict(entradaX, entradaY);
	document.getElementById('selChuva').value = result;
}
