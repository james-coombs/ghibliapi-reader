import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import PageHead from '../../src/components/shared/head';
import Nav from '../../src/components/shared/nav';

class InfoCard extends React.Component {
	constructor() {
		super();
	}
	render(){
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
					<strong>Name:</strong> {this.props.vehicles[this.props.currentVehicleId].name}</li>
				<li>
					<strong>Description:</strong> {this.props.vehicles[this.props.currentVehicleId].description}</li>
				<li>
					<strong>Vehicle Class(s):</strong> {this.props.vehicles[this.props.currentVehicleId].vehicle_class}</li>
				<li>
					<strong>Length:</strong> {this.props.vehicles[this.props.currentVehicleId].length} m</li>
				<li>
					<strong>Pilot:</strong> {this.props.vehicles[this.props.currentVehicleId].pilot}</li>
				<li>
					<strong>Films:</strong> {this.props.vehicles[this.props.currentVehicleId].films}</li>
			</div>
		)
	}
}

export default class Vehicles extends React.Component {
	constructor() {
		super();
		this.state = {
			showInfo: false,
			currentVehicleId: null,
		};
	}
	onClick(i){
		this.setState({showInfo: !this.state.showInfo, currentVehicleId: i});
	}
	static async getInitialProps () {
		const vehiclesRes = await axios.get('https://ghibliapi.herokuapp.com/vehicles');
		return {vehicles: vehiclesRes.data};
	}
	render() {
		const tableStyle = {
			backgroundColor: '#E1E2E1',
			border: '1px solid #F5F5F6',
			textAlign: 'center',
		};
		const vehiclesListStyle = {
			marginLeft: '0 auto',
			marginRight: '0 auto',
			width: '200px',
			position: 'absolute,'
		};
		const vehiclesItemStyle = {
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
				<div className='vehicles-list' style={tableStyle, vehiclesListStyle}>
					{
						this.state.showInfo && <InfoCard vehicles={this.props.vehicles} currentVehicleId={this.state.currentVehicleId} />
					}
					{
						this.props.vehicles.map((vehicle, i) => (
							<div className='vehicles-item' style={vehiclesItemStyle} key={i} onClick={this.onClick.bind(this, i)}>
								<h4>{vehicle.name}</h4>
							</div>
						))
					}
				</div>
			</div>
		)
	}
}

