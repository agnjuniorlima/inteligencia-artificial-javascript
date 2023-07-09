const CSV = require('./csv');
const csv = new CSV({separator: ';', output: ['output1', 'output2']});

const matrix = [[30, 300], [40, 400], [50, 500]];
csv.insertOutput('./testeCSV02.csv', matrix);
console.log('CSV atualizado com SUCESSO!');
