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
const dia = process.argv[2];
const mes = process.argv[3];
const ano = process.argv[4];
const predicoes = [Number(dia), Number(mes), Number(ano)];
const resultados = regression.predict(predicoes);

const fechamento = 'R$ '+parseFloat(resultados[0]).toFixed(4);
const abertura = 'R$ '+parseFloat(resultados[1]).toFixed(4);
const maxima = 'R$ '+parseFloat(resultados[2]).toFixed(4);
const minima = 'R$ '+parseFloat(resultados[3]).toFixed(4);

console.log(`Cotação do Dólar para o dia ${dia}/${mes}/${ano}`);
console.log(`Fechamento: ${fechamento}`);
console.log(`Abertura:   ${abertura}`);
console.log(`Máxima:     ${maxima}`);
console.log(`Mínima:     ${minima}`);
