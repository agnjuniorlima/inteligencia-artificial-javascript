const brain = require('brain.js');

const net = new brain.recurrent.GRUTimeStep(); // retorna um resultado aproximado

net.train([
	[0, 1, 2]
]);

const output = net.run([0, 1]);
console.log(`o dado posterior a 0 e 1 é ${output}`);
