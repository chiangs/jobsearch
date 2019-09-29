import * as React from 'react';
import css from './Title.module.css';

type Props = {
	titleText: string;
};

const Title: React.FC<Props> = ({ titleText }) => {
	return <h1 className={css.Title}>{titleText}</h1>;
};

export default React.memo(Title);
