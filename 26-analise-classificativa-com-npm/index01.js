const NaiveBayes = require('ml-bayes');

const bayes = new NaiveBayes();

bayes.train('Que dia feliz está hoje!', 'Feliz');
bayes.train('Meu dia hoje foi triste.', 'Triste');
bayes.train('Hoje meu dia foi ótimo!', 'Feliz');
bayes.train('Hoje o dia foi ruim.', 'Triste');

//const frase = 'Levantei da cama feliz hoje!';
const frase = 'Hoje meu dia não foi bom.';
const comparacao = bayes.guess(frase);
const resposta = bayes.extractWinner(comparacao);

console.log(`FRASE: ${frase}`);
console.log(comparacao);
console.log(resposta);
