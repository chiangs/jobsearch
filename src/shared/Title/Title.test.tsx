/** Import React */
import * as React from 'react';

/** Import Test Environment */
import { shallow, ShallowWrapper } from 'enzyme';

/** Import Tested Component */
import Title from './Title';

describe('<Title />', () => {

	describe('default', () => {
		let html: ShallowWrapper;

		beforeAll(() => {
			html = shallow(<Title />);
		});

		it('should render a <div />', () => {
			expect(html.contains(<div />)).toBe(true);
		});
	});
});
