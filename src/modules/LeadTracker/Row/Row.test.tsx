/** Import React */
import * as React from 'react';

/** Import Test Environment */
import { shallow, ShallowWrapper } from 'enzyme';

/** Import Tested Component */
import Row from './Row';

describe('<Row />', () => {

	describe('default', () => {
		let html: ShallowWrapper;

		beforeAll(() => {
			html = shallow(<Row />);
		});

		it('should render a <div />', () => {
			expect(html.contains(<div />)).toBe(true);
		});
	});
});
