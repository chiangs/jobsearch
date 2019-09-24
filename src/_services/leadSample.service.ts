import { Lead } from '../_types/types';

export const sampleLeads: Lead[] = [
	{
		company: 'Code & Hammer',
		companyUrl: 'codehammer.design',
		contact: {
			name: 'Stephen Chiang',
			phone: '4141 0000',
			email: 'stephen@codehammer.design',
			notes: ''
		},
		status: 'No positions',
		applicationSentDate: null,
		position: 'UX Engineer',
		location: 'Stavanger, Norway',
		source: 'codehammer.design',
		interestLevel: 'High',
		mySkills: ['JavaScript', 'React', '.NET Core', 'Azure'],
		skillGaps: [],
		feedback: '',
		interviewNotes: '',
		pros: '',
		cons: '',
		offer: ''
	},
	{
		company: 'ACME Web',
		companyUrl: 'ACMESEC.WEB',
		contact: {
			name: 'Wiley Coyote',
			phone: '4141 0000',
			email: 'wiley@acme.web',
			notes: 'Does not like road runners'
		},
		status: 'Dead',
		applicationSentDate: null,
		position: 'UX Engineer',
		location: 'Stavanger, Norway',
		source: 'somejobboard.no',
		interestLevel: 'Medium',
		mySkills: ['JavaScript', 'React', '.NET Core', 'Azure'],
		skillGaps: ['Rocket science'],
		feedback: '',
		interviewNotes: '',
		pros: '',
		cons: '',
		offer: ''
	}
];
