const KNN = require('ml-knn');

const idades = [[11], [12], [17], [18], [64], [65]];
const faixas_etarias = ['criança', 'adolescente', 'adolescente', 'adulto', 'adulto', 'idoso'];

const knn = new KNN(idades, faixas_etarias, {k: 1});

const idade = 70;
const faixa_etaria = knn.predict([idade]);

console.log(`Uma pessoa de ${idade} anos de idade é ${faixa_etaria}.`);
