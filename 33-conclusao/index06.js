const mlr = require('ml-regression-multivariate-linear');
const CSV = require('./csv');
const csv = new CSV({
	separator: ';',
	input: ['Data'],
	output: ['Fechamento', 'Abertura', 'Máxima', 'Mínima']
});

const historico = csv.csvToJSONInputOutput('./historico-dolar.csv');
let entradasTemp = historico.input;
let entradas = [];
for(let i=0; i<entradasTemp.length; i++) {
	// Data
	const arrEntrada = entradasTemp[i].toString().trim().split('.');
	entradas.push([Number(arrEntrada[0]), Number(arrEntrada[1]), Number(arrEntrada[2])]);
}

let saidas = historico.output;

const regression = new mlr(entradas, saidas);

const dados = csv.csvToJSONInputOutput('./dados-dolar.csv');
let predicoesTemp = dados.input;
let predicoes = [];
for(let i=0; i<predicoesTemp.length; i++) {
	// Data
	const arrEntrada = predicoesTemp[i].toString().trim().split('.');
	predicoes.push([Number(arrEntrada[0]), Number(arrEntrada[1]), Number(arrEntrada[2])]);
}

let resultados = regression.predict(predicoes);
for(let i=0; i<resultados.length; i++) {
	resultados[i] = [parseFloat(resultados[i]).toFixed(4)];
}

csv.insertOutput('./dados-dolar.csv', resultados);
console.log('CSV atualizado com SUCESSO!');
