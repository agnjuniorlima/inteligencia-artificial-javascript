const mlr = require('ml-regression-multivariate-linear');

const area_idade = [[45, 10], [75, 15], [80, 10], [95, 20], [100, 30]];
const preco = [[175000], [300000], [350000], [375000], [350000]];

const regression = new mlr(area_idade, preco);

const area = 55;
const idade = 12;

let result = regression.predict([area, idade]);
let output = parseFloat(result[0]).toFixed(0);

console.log(`${area}m² - ${idade} anos.`);
console.log(`Preço estimado: R$ ${output}`);	
