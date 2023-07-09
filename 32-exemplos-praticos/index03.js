const CSV = require('./csv');
const csv = new CSV({separator: ';', output: ['output']});

const matrix = [[30]];
csv.insertOutput('./testeCSV03.csv', matrix);
console.log('CSV atualizado com SUCESSO!');
