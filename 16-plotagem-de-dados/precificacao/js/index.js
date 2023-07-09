function prever() {
	const idade = Number(document.getElementById('idade').value);
	const area = Number(document.getElementById('area').value);

	const config = {
		input: [[10, 45], [20, 55], [15, 75], [30, 95]],
		output: [104500, 205500, 157500, 309500]
	};

	const regression = new multivariateRegression();
	regression.train(config);

	const result = regression.predict([[idade, area]])[0];

	plot(idade, area, result);
}

plot();
function plot(idade=0, area=0, result=0) {
	let trace = null;
	if(result>0) {
		trace = {
			x: [10, 20, 15, 30, idade],
			y: [104500, 205500, 157500, 309500, result],
			mode: 'markers',
			marker: {
				size: [45, 55, 75, 95, area]
			}
		};
	}else {
		trace = {
			x: [10, 20, 15, 30],
			y: [104500, 205500, 157500, 309500],
			mode: 'markers',
			marker: {
				size: [45, 55, 75, 95]
			}
		};
	}

	const data = [trace];
	Plotly.newPlot('grafico', data, {}, {showSendToCloud: true});
}
