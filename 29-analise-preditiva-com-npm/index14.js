const Mind = require('node-mind');

const a  = character(
  ' ### ' +
  '#   #' +
  '#####' +
  '#   #' +
  '#   #'
);

const b  = character(
  '#### ' +
  '#   #' +
  '#####' +
  '#   #' +
  '#### '
);

const c  = character(
  ' ####' +
  '#    ' +
  '#    ' +
  '#    ' +
  ' ####'
);

function character(string='') {
  return string.trim().split('').map(integer);

  function integer(symbol='') {
    if(symbol=='#') return 1;
    else return 0;
  }
}

function map(letter='') {
  if(letter=='a') return [0.1];
  if(letter=='b') return [0.5];
  if(letter=='c') return [0.9];
  return 0;
}

const mind = new Mind({activator: 'sigmoid'})
.learn([
  {input: a, output: map('a')},
  {input: b, output: map('b')},
  {input: c, output: map('c')}
]);

let result = mind.predict(character(
  ' ####' +
  '#    ' +
  '#    ' +
  '##   ' +
  ' ####'
));

result = parseFloat(result).toFixed(1);
if(result==0.1) result = 'A';
else if(result==0.5) result = 'B';
else if(result==0.9) result = 'C';
else {
  const diffA = Math.abs(result - 0.1);
  const diffB = Math.abs(result - 0.5);
  const diffC = Math.abs(result - 0.9);
  const arrDiff = [diffA, diffB, diffC].sort();

  if(arrDiff[0]==diffA) result = 'A';
  if(arrDiff[0]==diffB) result = 'B';
  if(arrDiff[0]==diffC) result = 'C';
}

console.log(result);
