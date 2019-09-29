import * as React from 'react';
import css from './Welcome.module.css';
import { ConfirmationDialog, Button, Title } from '../../../shared';

type Props = {};

const Welcome: React.FC<Props> = props => {
	const title = `Welcome to my job search tracker.`;
	const message = (
		<p>
			You can click around and enter information or click on the
			<span className='emphasis'>&nbsp;Autofill</span> button in the
			header to get pre-populated data.
		</p>
	);
	const onConfirm = () => console.log('save state to localStorage');

	return (
		<section data-test='' className={css.Welcome}>
			<ConfirmationDialog>
				<section className={css.WelcomeText}>
					<Title titleText={title} />
					{message}
				</section>
				<section className={css.WelcomeActions}>
					<Button
						type={`button`}
						clickHandler={onConfirm}
						style={`accent`}
						label={`Ok, don't show this anymore`}
					/>
				</section>
			</ConfirmationDialog>
		</section>
	);
};

export default React.memo(Welcome);
