function plot(type='scatter') {
	type = type.toString().toLowerCase().trim();

	let trace = {};
	if(type=='pie') {
		trace = {
			values: [100, 200, 300, 400],
			labels: ['título 1', 'título 2', 'título 3', 'título 4'],
			type: type
		};
	}else if(type=='bubble') {
		trace = {
			x: [1, 2, 3, 4],
			y: [1, 2, 3, 4],
			marker: {
				size: [10, 20, 30, 40]
			}
		};
	}else {
		trace = {
			x: [1, 2, 3, 4],
			y: [1, 2, 3, 4],
			type: type
		};
	}
	if((type=='scatter')||(type=='bubble')) trace.mode = 'markers';
	if(type=='lines') trace.type = 'scatter';

	const data = [trace];
	Plotly.newPlot('grafico', data, {}, {showSendToCloud: true});
}
