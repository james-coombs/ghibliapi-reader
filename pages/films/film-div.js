import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const handler = () => Router.push({
	pathname: '/films',
});

export default class FilmDiv extends React.Component {
	render(){
		const style = {
			backgroundColor: '#E1E2E1',
			border: '1px solid #F5F5F6',
			textAlign: 'center',
			verticalAlign: 'middle',
			lineHeight: '90px',
			borderRadius: '25px',
			height: '5em'
		};
		return(
			<div className='film-link-div' onClick={handler} style={style}>
				<a>Films</a>
			</div>
		);
	}
}
