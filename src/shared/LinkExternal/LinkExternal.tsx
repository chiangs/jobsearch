import * as React from 'react';
import css from './LinkExternal.module.css';

type Props = {
	label: string;
	link: string;
};

const LinkExternal: React.FunctionComponent<Props> = ({ label, link }) => {
	return (
		<a data-test='' className={css.LinkExternal} href={link}>
			{label}
		</a>
	);
};

export default React.memo(LinkExternal);
