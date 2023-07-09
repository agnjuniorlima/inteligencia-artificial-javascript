const brain = require('brain.js');

const net = new brain.recurrent.GRU();

net.train([
	'Olá! Tudo bem?',
	'Boa tarde! Agradeço a sua presença.'
]);

const input = 'Olá!';
const output = net.run(input);
console.log(input);
console.log(output.trim());
