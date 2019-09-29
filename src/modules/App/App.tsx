import React from 'react';
import css from './App.module.css';
import Header from '../../shared/Header';
import LeadTracker from '../LeadTracker';
import Welcome from './Welcome';

const App: React.FC = () => {
	const ui = true ? <Welcome /> : <LeadTracker />;
	return (
		<div className={css.App}>
			<header className={css.Header}>
				<Header />
			</header>
			<main className={css.Main}>{ui}</main>
			<footer></footer>
		</div>
	);
};

export default App;
