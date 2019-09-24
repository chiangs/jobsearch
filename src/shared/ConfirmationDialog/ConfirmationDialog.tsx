import * as React from 'react';
import css from './ConfirmationDialog.module.css';
import Button from '../Button';

type Props = {};

const ConfirmationDialog: React.FC<Props> = props => {
	return (
		<aside data-test='' className={css.ConfirmnationDialog}>
			{props.children}
		</aside>
	);
};

export default ConfirmationDialog;
