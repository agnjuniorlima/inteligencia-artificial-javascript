const brain = require('brain.js');

const net = new brain.recurrent.GRU();

net.train([
	{input: 'Olá! O dia está ótimo hoje!', output: 'feliz'},
	{input: 'Oi. Hoje não tive um dia muito bom.', output: 'triste'}
]);

const input = 'Olá! O dia está ótimo hoje!';
const output = net.run(input);
console.log(output);
