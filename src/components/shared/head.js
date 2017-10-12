import React from 'react';
import Head from 'next/head';

export default class PageHead extends React.Component {
	render() {
		return (
			<div>
				<Head>
					<title>ghibli-api-next</title>
				</Head>
			</div>
		);
	}
}