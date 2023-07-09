const CSV = require('./csv');
const csv = new CSV({separator: ';', output: ['output']});

const matrix = [[30], [40], [50]];
csv.insertOutput('./testeCSV01.csv', matrix);
console.log('CSV atualizado com SUCESSO!');
