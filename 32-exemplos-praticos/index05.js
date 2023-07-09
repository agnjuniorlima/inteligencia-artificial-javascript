const mlr = require('ml-regression-multivariate-linear');
const CSV = require('./csv');
const csv = new CSV({
	separator: ';',
	input: ['IDADE', 'ÁREA', 'REGIÃO'],
	output: [' PREÇO']
});

const historico = csv.csvToJSONInputOutput('./historico-imoveis.csv');
let entradas = historico.input;
for(let i=0; i<entradas.length; i++) {
	// REGIÃO
	if(entradas[i][2].toString().trim()=='Zona Norte') entradas[i][2] = 0;
	if(entradas[i][2].toString().trim()=='Centro') entradas[i][2] = 1;
	if(entradas[i][2].toString().trim()=='Zona Sul') entradas[i][2] = 2;
}

let saidas = historico.output;
for(let i=0; i<saidas.length; i++) {
	saidas[i] = [saidas[i]];
}

const regression = new mlr(entradas, saidas);

const dados = csv.csvToJSONInputOutput('./dados-imoveis.csv');
let predicoes = dados.input;
for(let i=0; i<predicoes.length; i++) {
	// REGIÃO
	if(predicoes[i][2].toString().trim()=='Zona Norte') predicoes[i][2] = 0;
	if(predicoes[i][2].toString().trim()=='Centro') predicoes[i][2] = 1;
	if(predicoes[i][2].toString().trim()=='Zona Sul') predicoes[i][2] = 2;
}

let resultados = regression.predict(predicoes);
for(let i=0; i<resultados.length; i++) {
	resultados[i] = [parseFloat(resultados[i]).toFixed(0)];
}

csv.insertOutput('./dados-imoveis.csv', resultados);
console.log('CSV atualizado com SUCESSO!');
