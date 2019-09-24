import * as React from 'react';
import css from './Row.module.css';

type Props = {
	index?: number;
};

const Row: React.FC<Props> = ({ index, ...props }) => {
	let style = null;
	if (index === -1) style = css.Header;
	if (index && index !== -1) {
		style = index % 2 === 0 ? css.Even : css.Odd;
	}
	return (
		<section data-test='' className={[css.Row, style].join(' ')}>
			{props.children}
		</section>
	);
};

export default Row;
