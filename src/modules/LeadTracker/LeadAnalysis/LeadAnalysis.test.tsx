/** Import React */
import * as React from 'react';

/** Import Test Environment */
import { shallow, ShallowWrapper } from 'enzyme';

/** Import Tested Component */
import LeadAnalysis from './LeadAnalysis';

describe('<LeadAnalysis />', () => {

	describe('default', () => {
		let html: ShallowWrapper;

		beforeAll(() => {
			html = shallow(<LeadAnalysis />);
		});

		it('should render a <div />', () => {
			expect(html.contains(<div />)).toBe(true);
		});
	});
});
