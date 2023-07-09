let classe1 = '';
let classe2 = '';
let texto1  = '';
let texto2  = '';

function exibeCadastro() {
	document.getElementById('classe1').value = classe1.toString().trim();
	document.getElementById('classe2').value = classe1.toString().trim();

	document.getElementById('texto1').value = texto1.toString().trim();
	document.getElementById('texto2').value = texto2.toString().trim();
}

function cadastrar() {
	classe1 = document.getElementById('classe1').value.toString().trim();
	classe2 = document.getElementById('classe2').value.toString().trim();

	texto1 = document.getElementById('texto1').value.toString().trim();
	texto2 = document.getElementById('texto2').value.toString().trim();

	// tokenização
	const arr1 = texto1.split(' ');
	const arr2 = texto2.split(' ');

	for(let i=0; i<arr1.length; i++) {
		entradas.push(arr1[i].toString().trim());
		classes.push(classe1);
	}

	for(let i=0; i<arr2.length; i++) {
		entradas.push(arr2[i].toString().trim());
		classes.push(classe2);
	}

	let linhas =
	`
	<tr>
		<td>${classe1}</td>
		<td>${texto1}</td>
	</tr>
	<tr>
		<td>${classe2}</td>
		<td>${texto2}</td>
	</tr>
	`;

	document.getElementById('linhas').innerHTML = linhas;
}

function executar() {
	train({input: entradas, output: classes});

	const entrada = document.getElementById('entrada').value.toString().trim();
	// tokenização
	const arrEntrada = entrada.split(' ');
	let txtClasses = '';
	for(let i=0; i<arrEntrada.length; i++) {
		txtClasses += predict(arrEntrada[i].toString().trim());
	}

	const qtdNome1 = txtClasses.split(classe1).length-1;
	const qtdNome2 = txtClasses.split(classe2).length-1;

	let resultado = classe1;
	if(qtdNome2 > qtdNome1) resultado = classe2;

	document.getElementById('resultado').innerHTML = ' - CLASSIFICAÇAO: ' + resultado;
}
