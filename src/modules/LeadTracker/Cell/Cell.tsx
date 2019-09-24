import * as React from 'react';
import css from './Cell.module.css';

type Props = {};

const Cell: React.FC<Props> = props => {
	return (
		<div data-test='' className={css.Cell}>
			{props.children}
		</div>
	);
};

export default Cell;
