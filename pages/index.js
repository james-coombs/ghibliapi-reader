import React from 'react';
import Head from 'next/head';
import Nav from '../src/components/shared/nav';

export default class Index extends React.Component {
	render() {
		return (
			<div id="root">
			<Nav />
				<h3>
					Index
				</h3>
			</div>
		);
	}
}
