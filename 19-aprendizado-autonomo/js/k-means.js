function cadastrar() {
	eixoX.push(Number(document.getElementById('idade').value));
	eixoY.push(Number(document.getElementById('peso').value));

	let linhas = '';
	for(let i=0; i<eixoX.length; i++) {
		linhas +=
		"<tr>" +
			"<td>" + eixoX[i] + "</td>" +
			"<td>" + eixoY[i] + "</td>" +
		"</tr>";
	}

	document.getElementById('linhas').innerHTML = linhas;
}

function executar() {
	grupos = Number(document.getElementById('grupos').value);

	train({
		x: eixoX,
		y: eixoY,
		groups: grupos
	});

	const result = predict();
	let txt = '';
	for(let i=0; i<result.length; i++) {
		txt += `GRUPO: ${i+1}: `;
		for(let j=0; j<result[i].length; j++) {
			txt += `[${result[i][j][0]}, ${result[i][j][1]}] `;
		}
		txt += '\r\n';
	}

	document.getElementById('resultado').innerHTML = txt;
}
