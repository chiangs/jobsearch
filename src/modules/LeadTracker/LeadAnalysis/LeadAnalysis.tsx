import * as React from 'react';

/** Stylesheet Imports */
import './LeadAnalysis.css';

export interface Props {
	children?: React.ReactNode
}

export interface State {
}

export default class LeadAnalysis extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props)

		this.state = {
		}
	}

	render() {
		return (
			<div>{ this.props.children }</div>
		)
	}
}
