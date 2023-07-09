const brain = require('brain.js');

const net = new brain.recurrent.GRU(); // retorna um resultado exato

net.train([
	[10, 20, 30]
]);

const output = net.run([10, 20]);
console.log(`o dado posterior a 10 e 20 é ${output}`);
