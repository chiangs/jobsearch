export type Visibility = 'visible' | 'hidden';

export type Style = 'default' | 'alternate' | 'accent';

export type StyleState =
	| 'active'
	| 'default'
	| 'hover'
	| 'deactivated'
	| 'invalid'
	| 'error';

export type Status =
	| 'Application sent'
	| 'No positions'
	| 'Dead'
	| 'Interview scheduled';

export type ButtonType = 'button' | 'submit';

export type InterestLevel = 'High' | 'Medium' | 'Low';

export type Contact = {
	name: string;
	phone: string;
	email: string;
	notes: string;
};

export type Lead = {
	company: string;
	companyUrl: string;
	contact: Contact;
	status: Status;
	applicationSentDate: Date | null;
	position: string;
	location: string;
	source: string;
	interestLevel: InterestLevel;
	mySkills: string[];
	skillGaps: string[];
	feedback: string;
	interviewNotes: string;
	pros: string;
	cons: string;
	offer: string;
};
