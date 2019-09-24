import * as React from 'react';
import css from './LeadActions.module.css';

type Props = {};

const LeadActions: React.FC<Props> = props => {
	return (
		<section data-test='' className={css.LeadActions}>
			Edit,Delete,Export Contact
		</section>
	);
};

export default LeadActions;
