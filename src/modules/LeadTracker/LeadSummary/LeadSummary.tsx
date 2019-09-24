import * as React from 'react';
import css from './LeadSummary.module.css';
import Row from '../Row';
import Cell from '../Cell';
import { sampleLeads } from '../../../_services/leadSample.service';

type Props = {};

const LeadSummary: React.FC<Props> = props => {
	const headersList = {
		company: 'visible',
		companyUrl: 'visible',
		contact: 'visible',
		status: 'visible',
		applicationSentDate: 'visible',
		position: 'visible',
		location: 'visible',
		source: 'visible',
		interestLevel: 'visible',
		mySkills: 'visible',
		skillGaps: 'visible',
		feedback: 'visible',
		interviewNotes: 'visible',
		pros: 'visible',
		cons: 'visible',
		offer: 'visible'
	};
	let headerItems: string[] = [];
	for (let [key, value] of Object.entries(headersList)) {
		if (value === 'visible') headerItems = headerItems.concat(key);
	}
	const headers = headerItems.map(item => <Cell>{item}</Cell>);

	const summary = sampleLeads.map(sample => (
		<Row>
			{headersList.company === 'visible' ? (
				<Cell>{sample.company}</Cell>
			) : null}
			<Cell>{sample.companyUrl}</Cell>
			<Cell>{sample.contact}</Cell>
			<Cell>{sample.status}</Cell>
			<Cell>{sample.applicationSentDate}</Cell>
			<Cell>{sample.position}</Cell>
			<Cell>{sample.location}</Cell>
			<Cell>{sample.source}</Cell>
			<Cell>{sample.interestLevel}</Cell>
			<Cell>{sample.mySkills}</Cell>
			<Cell>{sample.skillGaps}</Cell>
			<Cell>{sample.feedback}</Cell>
			<Cell>{sample.interviewNotes}</Cell>
			<Cell>{sample.pros}</Cell>
			<Cell>{sample.cons}</Cell>
			<Cell>{sample.offer}</Cell>
		</Row>
	));

	return (
		<section data-test='' className={css.LeadSummary}>
			<section className={css.SummaryHeader}>
				<Row index={-1}>{headers}</Row>
			</section>
			<section className={css.SummaryBody}>{summary}</section>
		</section>
	);
};

export default LeadSummary;
