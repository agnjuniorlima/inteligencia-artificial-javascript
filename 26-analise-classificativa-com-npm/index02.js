const NaiveBayes = require('ml-bayes');

const bayes = new NaiveBayes();

bayes.train('Quente, húmido e ventos fortes.', 'Chuva');
bayes.train('Frio, seco e ventos fracos.', 'Nublado');
bayes.train('Quente, seco e ventos fracos.', 'Sol');

//const frase = 'Húmido, quente e ventos fracos.';
//const frase = 'Seco, frio e ventos fortes.';
const frase = 'Seco, quente e ventos fortes.';
const comparacao = bayes.guess(frase);
const resposta = bayes.extractWinner(comparacao);

console.log(`FRASE: ${frase}`);
console.log(comparacao);
console.log(resposta);
