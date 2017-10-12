import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const handler = () => Router.push({
	pathname: '/people',
});

export default class PeopleDiv extends React.Component {
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
		const divPosition = {
			marginLeft: '0 auto',
			marginRight: '0 auto',
		};
		return(
			<div className='people-link-div' onClick={handler} style={style}>
				<a>People</a>
			</div>
		);
	}
}
