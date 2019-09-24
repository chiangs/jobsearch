/** Import React */
import * as React from 'react';

/** Import Test Environment */
import { shallow, ShallowWrapper } from 'enzyme';

/** Import Tested Component */
import ConfirmationDialog from './ConfirmationDialog';

describe('<ConfirmationDialog />', () => {

	describe('default', () => {
		let html: ShallowWrapper;

		beforeAll(() => {
			html = shallow(<ConfirmationDialog />);
		});

		it('should render a <div />', () => {
			expect(html.contains(<div />)).toBe(true);
		});
	});
});
