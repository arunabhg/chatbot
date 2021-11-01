import React from 'react';

class ComponentToPrint extends React.Component {
	render() {
		return (
			<div>
				<div>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas atque repellendus ab
					porro quos nam rem doloribus facere hic maiores, iusto architecto officia totam sequi
					quasi corporis alias ut fugit? A, quibusdam aspernatur perferendis eveniet, molestiae
					dolorum odio velit nam blanditiis expedita tempore obcaecati maiores amet error sunt quam
					numquam minima quasi laboriosam sed? Esse sint voluptates culpa quod error? Amet, ipsam
					voluptas? <br />
				</div>
				<div>
					<table>
						<thead>
							<th>header 1</th>
							<th>header 2</th>
							<th>header 3</th>
						</thead>
						<tbody>
							<tr>
								<td>data 1</td>
								<td>data 2</td>
								<td>data 3</td>
							</tr>
							<tr>
								<td>data 4</td>
								<td>data 5</td>
								<td>data 6</td>
							</tr>
							<tr>
								<td>data A</td>
								<td>data B</td>
								<td>data C</td>
							</tr>
						</tbody>
					</table>
					<br />
				</div>
				<br />
			</div>
		);
	}
}

export default ComponentToPrint;
