const brain = require('brain.js');

const net = new brain.recurrent.LSTMTimeStep(); // retorna um resultado aproximado

net.train([
	[10, 20, 30]
]);

const output = net.run([10, 20]);
console.log(`o dado posterior a 10 e 20 é ${output}`);
