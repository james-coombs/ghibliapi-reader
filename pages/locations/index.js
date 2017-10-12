import React from 'react';
import axios from 'axios';
import PageHead from '../../components/head';
import Link from 'next/link';
import Nav from '../../components/nav';

class InfoCard extends React.Component {
	constructor() {
		super();
	}
	render() {
		const infoCardStyle = {
			postiton: 'fixed',
			top: '0',
			width: '100vw',
			listStyleType: 'none',
			backgroundColor: '#a5d6a7',
			border: '1px solid #F5F5F6',
			textAlign: 'center',
			verticalAlign: 'middle',
			lineHeight: '1.7em',
			borderRadius: '25px',
			height: 'auto',
		};
		return(
			<div className='infoCard' style={infoCardStyle}>
				<li>
					<strong>Name:</strong> {this.props.locations[this.props.currentLocationId].name}</li>
				<li>
					<strong>Climate:</strong> {this.props.locations[this.props.currentLocationId].climate}</li>
				<li>
					<strong>Terrain:</strong> {this.props.locations[this.props.currentLocationId].terrain}</li>
				<li>
					<strong>Surface Water:</strong> {this.props.locations[this.props.currentLocationId].surface_water}</li>
				<li>
					<strong>Residents:</strong> {this.props.locations[this.props.currentLocationId].residents}</li>
				<li>
					<strong>Films:</strong> {this.props.locations[this.props.currentLocationId].films}</li>
			</div>
		)
	}
}

export default class Locations extends React.Component {
	constructor() {
		super();
		this.state = {
			showInfo: false,
			currentLocationId: null,
		};
	}
	onClick(i){
		this.setState({showInfo: !this.state.showInfo, currentLocationId: i});
	}
	static async getInitialProps () {
		const locationsRes = await axios.get('https://ghibliapi.herokuapp.com/locations');
		return {locations: locationsRes.data};
	}
	render() {
		const tableStyle = {
			backgroundColor: '#E1E2E1',
			border: '1px solid #F5F5F6',
			textAlign: 'center',
		};
		const locationsListStyle = {
			marginLeft: '0 auto',
			marginRight: '0 auto',
			width: '200px',
			position: 'absolute,'
		};
		const locationItemStyle = {
			top: '0px',
			width: '100vw',
			backgroundColor: '#E1E2E1',
			border: '1px solid #F5F5F6',
			textAlign: 'center',
			verticalAlign: 'middle',
			lineHeight: '30px',
			borderRadius: '25px',
			height: '5em'
		};
		return (
			<div>
			<PageHead />
			<Nav />
				<div className='locations-list' style={tableStyle, locationsListStyle}>
					{
						this.state.showInfo && <InfoCard locations={this.props.locations} currentLocationId={this.state.currentLocationId} />
					}
					{
						this.props.locations.map((location, i) => (
							<div className='location-item' style={locationItemStyle} key={i} onClick={this.onClick.bind(this, i)}>
								<h4>{location.name}</h4>
							</div>
						))
					}
				</div>
			</div>
		)
	}
}

