import * as React from 'react';
import css from './Welcome.module.css';
import { ConfirmationDialog, Button } from '../../../shared';

type Props = {};

const Welcome: React.FC<Props> = props => {
	const onConfirm = () => console.log('save state to localStorage');

	return (
		<section data-test='' className={css.Welcome}>
			<ConfirmationDialog>
				<h2>Welcome to my job search tracker.</h2>
				<p>
					You can click around and enter information or click on the
					<span className='emphasis'>Autofill</span> button in the
					header to get pre-populated data.
				</p>
				<Button
					type={`button`}
					clickHandler={onConfirm}
					style={`accent`}
					label={`Ok, don't show this anymore`}
				/>
			</ConfirmationDialog>
		</section>
	);
};

export default React.memo(Welcome);
