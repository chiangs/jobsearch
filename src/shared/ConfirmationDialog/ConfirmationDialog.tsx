import * as React from 'react';
import css from './ConfirmationDialog.module.css';

type Props = {};

const ConfirmationDialog: React.FC<Props> = props => {
	return (
		<aside data-test='' className={css.ConfirmationDialog}>
			{props.children}
		</aside>
	);
};

export default ConfirmationDialog;
