function prepararCadastro() {
	document.getElementById('entrada').value = '';
	document.getElementById('classe').value = '';
}

function cadastrar() {
	entradas.push(document.getElementById('entrada').value.toString().trim());
	classes.push(document.getElementById('classe').value.toString().trim());

	let linhas = '';
	for(let i=0; i<entradas.length; i++) {
		linhas +=
		"<tr>" +
			"<td>" + entradas[i] + "</td>" +
			"<td>" + classes[i] + "</td>" +
		"</tr>";
	}

	let opcoes = "<option value=''></option>";
	const nomeEntradas = eliminaDuplicados(entradas);
	for(let i=0; i<nomeEntradas.length; i++) {
		opcoes += "<option value='" + nomeEntradas[i] + "'>" + nomeEntradas[i] + "</option>";
	}

	document.getElementById('linhas').innerHTML = linhas;
	document.getElementById('sel_entrada').innerHTML = opcoes;
}

function executar() {
	train({input: entradas, output: classes});

	const selEntrada = document.getElementById('sel_entrada').value.toString().trim();
	let retorno = '';

	if(selEntrada.toString().trim().length > 0) {

		if(tipo=='p') {
			const arrJSON = predict(selEntrada);

			for(let i=0; i<arrJSON.length; i++) {
				retorno +=
				'<strong>' + arrJSON[i].class + ': </strong>' + arrJSON[i].probability + '% - ';
			}

			retorno = ': ' + retorno + '#';
			retorno = retorno.replace(' - #', '');
		}else {
			const strClass = predict(selEntrada);

			retorno += ': CLASSIFICAÇAO: <strong>' + strClass + '</strong>';	
		}
	}else {
		retorno = ': 0';
	}

	document.getElementById('resultado').innerHTML = retorno;
}
