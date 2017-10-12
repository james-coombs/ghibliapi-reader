import React from 'react';
import Link from 'next/link';

export default class Nav extends React.Component {
	render() {
		let linkStyleLeft = {
			textAlign: 'left',
			float: 'left',
			paddingRight: '1em',
			paddingLeft: '1em',
			verticalAlign: 'middle',
			lineHeight: '30px',
		};
		let linkStyleRight = {
			textAlign: 'right',
			float: 'right',
			paddingRight: '1em',
			paddingLeft: '1em',
			verticalAlign: 'middle',
			lineHeight: '30px',
		};
		let divStyle = {
			paddingBottom: '2em',
			border: '2px solid #519657',
			backgroundColor: '#F5F5F6',
			borderRadius: '25px',
		};
		return (
			<div style={divStyle}>
				<div className='nav-link' style={linkStyleLeft}>
					<Link href='/'>
						<a>Home</a>
					</Link>
				</div>

				<div className='nav-link' style={linkStyleLeft}>
					<Link href='/films'>
						<a>Films</a>
					</Link>
				</div>

				<div className='nav-link' style={linkStyleLeft}>
					<Link href='/people'>
						<a>People</a>
					</Link>
				</div>

				<div className='nav-link' style={linkStyleLeft}>
					<Link href='/locations'>
						<a>Locations</a>
					</Link>
				</div>

				<div className='nav-link' style={linkStyleLeft}>
					<Link href='/species'>
						<a>Species</a>
					</Link>
				</div>

				<div className='nav-link' style={linkStyleLeft}>
					<Link href='/vehicles'>
						<a>Vehicles</a>
					</Link>
				</div>

				<div className='nav-link' style={linkStyleRight}>
					<Link href='https://ghibliapi.herokuapp.com/'>
						<a>Check out the Studio Ghibli API!</a>
					</Link>
				</div>
			</div>
		);
	}
}
