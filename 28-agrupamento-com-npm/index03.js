const skmeans = require('skmeans');

const data = [1, 2, 3, 10, 11, 12, 50, 55, 70];
const result = skmeans(data, 3);

console.log(result);
