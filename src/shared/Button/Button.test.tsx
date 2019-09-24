/** Import React */
import * as React from 'react';

/** Import Test Environment */
import { shallow, ShallowWrapper } from 'enzyme';

/** Import Tested Component */
import Button from './Button';

describe('<Button />', () => {

	describe('default', () => {
		let html: ShallowWrapper;

		beforeAll(() => {
			html = shallow(<Button />);
		});

		it('should render a <div />', () => {
			expect(html.contains(<div />)).toBe(true);
		});
	});
});
