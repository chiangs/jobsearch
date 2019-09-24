import * as React from 'react';
import css from './LeadTracker.module.css';
import LeadSummary from './LeadSummary';
import LeadAnalysis from './LeadAnalysis';
import Tabs from './Tabs';

type Props = {};

const LeadTracker: React.FC<Props> = props => {
	const view = true ? <LeadSummary /> : <LeadAnalysis />;
	return (
		<article data-test='' className={css.LeadTracker}>
			<Tabs />
			<section className={css.TrackerView}>{view}</section>
		</article>
	);
};

export default LeadTracker;
