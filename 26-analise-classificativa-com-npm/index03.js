const NaiveBayes = require('ml-bayes');

const bayes = new NaiveBayes();

bayes.train('Olá! Tenha um bom dia!', 'Português');
bayes.train('OI! Como vai você?', 'Português');
bayes.train('O livro está sobre a mesa.', 'Português');
bayes.train('Qual é o seu nome?', 'Português');

bayes.train('Hello! Have a nice day!', 'Inglês');
bayes.train('HI! How are you?', 'Inglês');
bayes.train('The book is on the table.', 'Inglês');
bayes.train('What is your name?', 'Inglês');

bayes.train('¡Hola! ¡Tenga un buen día!', 'Espanhol');
bayes.train('HI! ¿Cómo te va?', 'Espanhol');
bayes.train('El libro está sobre la mesa.', 'Espanhol');
bayes.train('¿Cual es tu nombre?', 'Espanhol');

bayes.train('Bonjour Passez une bonne journée!', 'Francês');
bayes.train('Salut Comment ça va.', 'Francês');
bayes.train('Le livre est sur la table.', 'Francês');
bayes.train('Quel est votre nom.', 'Francês');

bayes.train('Hallo! Ich wünsche dir einen schönen Tag!', 'Alemão');
bayes.train('Hi! Wie geht es dir.', 'Alemão');
bayes.train('Das Buch liegt auf dem Tisch.', 'Alemão');
bayes.train('Wie heißt du.', 'Alemão');

const portugues = 'Oi! Hoje está um ótimo dia para correr.';
const ingles = 'Hi! Today is a great day to run.';
const espanhol = 'Hola! Hoy es un gran día para correr.';
const frances = "Salut Aujourd'hui est un grand jour pour courir.";
const alemao = 'Hi! Heute ist ein großartiger Tag zum Laufen.';

const frase = alemao;

const comparacao = bayes.guess(frase);
const resposta = bayes.extractWinner(comparacao);

console.log(`FRASE: ${frase}`);
console.log(`Idioma: ${resposta.label}`);
