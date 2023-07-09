const kmeans = require('ml-kmeans');

const data = [[1, 2, 1], [2, 1, 2], [50, 20, 10], [30, 20, 40], [0, 2, 1]];

const group = kmeans(data, 2);
console.log(group.clusters);
