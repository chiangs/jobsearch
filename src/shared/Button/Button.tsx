import * as React from 'react';
import css from './Button.module.css';
import { Style, ButtonType } from '../../_types/types';

type Props = {
	label: string;
	type: ButtonType;
	style: Style;
	clickHandler: Function;
};

const Button: React.FunctionComponent<Props> = ({
	label,
	type,
	style,
	clickHandler
}) => {
	const styleClass = style;
	const onButtonClick = () => clickHandler();

	return (
		<button
			data-test=''
			type={type}
			className={[css.Button, css.styleClass].join(' ')}
			onClick={onButtonClick}>
			{label}
		</button>
	);
};

export default React.memo(Button);
