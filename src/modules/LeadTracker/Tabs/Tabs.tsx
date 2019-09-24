import * as React from 'react';
import css from './Tabs.module.css';

type Props = {};

const Tabs: React.FC<Props> = props => {
	return (
		<section data-test='' className={css.Tabs}>
			Leads, Analysis
		</section>
	);
};

export default Tabs;
