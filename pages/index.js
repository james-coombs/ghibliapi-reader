import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

export default class Index extends React.Component {
	render() {
		return (
			<div>
			<Nav />
				<h3>
					Index
				</h3>
			</div>
		);
	}
}
