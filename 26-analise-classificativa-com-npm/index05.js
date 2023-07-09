const dt = require('node-decision-tree');

const train = [
	{pai: "castanhos", mae: "castanhos", filho: "castanhos"},
	{pai: "verdes", mae: "castanhos", filho: "castanhos"},
	{pai: "azuis", mae: "castanhos", filho: "azuis"},
	{pai: "verdes", mae: "verdes", filho: "verdes"},
	{pai: "verdes", mae: "azuis", filho: "verdes"},
	{pai: "azuis", mae: "azuis", filho: "azuis"}
];

const input = ["pai", "mae"];
const output = ["filho"];

//const predict = [{pai: "castanhos", mae: "azuis"}];
const predict = [{pai: "azuis", mae: "castanhos"}];

const tree = new dt.Tree();
tree.fit(train, input, output);

const result = tree.predict(predict);

console.log(result);
