const kmeans = require('ml-kmeans');

const data = [[1], [2], [3], [10], [11], [12], [100], [101], [102]];

const group = kmeans(data, 3);
console.log(group.clusters);
