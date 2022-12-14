import React from 'react';
import './assets/scss/counter.scss';

export const Counter = () => {
	const [ count, setCount ] = React.useState( 0 );

	const onClickMinus = () => setCount( count - 1 );
	const onClickPlus = () => setCount( count + 1 );

	return (
		<div className="counter-wrapp">
			<div>
				<h2>Counter:</h2>
				<h1>{ count }</h1>
				<button onClick={ onClickMinus } className="minus">- Minus</button>
				<button onClick={ onClickPlus } className="plus">Plus +</button>
			</div>
		</div>
	);
}
