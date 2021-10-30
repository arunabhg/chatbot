import React from 'react';

import './Options.css';

const Options = (props) => {
	const options = [
		{ text: 'Roadside Assistance', handler: props.actionProvider.handleRoadsideList, id: 1 },
		{ text: 'Car Oil Service', handler: () => {}, id: 2 },
		{ text: 'Car Wash & Wax', handler: () => {}, id: 3 },
		{ text: 'Car Machine Polish', handler: () => {}, id: 4 },
		{ text: 'Car Dent Removal', handler: () => {}, id: 5 }
	];

	const optionsMarkup = options.map((option) => (
		<button className='options-button' key={option.id} onClick={option.handler}>
			{option.text}
		</button>
	));

	return <div className='options-container'>{optionsMarkup}</div>;
};

export default Options;
