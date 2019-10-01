import React, { Component } from 'react';
import CanvasJSReact from '../../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ColumnChart extends Component {
	render() {
		const options = {
			title: {
				text: "Basic Column Chart"
			},
			animationEnabled: true,
			data: [
				{
					// Change type to "doughnut", "line", "splineArea", etc.
					type: "column",
					dataPoints: [
						{ label: "Sagbama", y: 10 },
						{ label: "Southern Ijaw", y: 15 },
						{ label: "Yenagoa", y: 25 },
						{ label: "Ogbia", y: 17 },
						{ label: "Nembe", y: 8 },
						{ label: "Brass", y: 8 },
						{ label: "Kolokuma Opokuma", y: 8 },
						{ label: "Ekeremor", y: 9 }
					]
				}
			]
		}

		return (
			<div>
				<h1 className='text-center mt-5'>Schools by Local Government Areas</h1>
				<CanvasJSChart options={options}
				/* onRef={ref => this.chart = ref} */
				/>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
		);
	}
}

export default ColumnChart;