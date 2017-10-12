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
		return (
			<div className='infoCard' style={infoCardStyle}>
				<li>
					<strong>Name:</strong> {this.props.species[this.props.currentSpeciesId].name}</li>
				<li>
					<strong>Classification:</strong> {this.props.species[this.props.currentSpeciesId].classification}</li>
				<li>
					<strong>Eye Color(s):</strong> {this.props.species[this.props.currentSpeciesId].eye_colors}</li>
				<li>
					<strong>Hair Color(s):</strong> {this.props.species[this.props.currentSpeciesId].hair_colors}</li>
				<li>
					<strong>People:</strong> {this.props.species[this.props.currentSpeciesId].people}</li>
				<li>
					<strong>Films:</strong> {this.props.species[this.props.currentSpeciesId].films}</li>
			</div>
		)
	}
}

export default class Species extends React.Component {
	constructor() {
		super();
		this.state = {
			showInfo: false,
			currentSpeciesId: null,
		};
	}
	onClick(i){
		this.setState({showInfo: !this.state.showInfo, currentSpeciesId: i});
	}
	static async getInitialProps () {
		const speciesRes = await axios.get('https://ghibliapi.herokuapp.com/species');
		return {species: speciesRes.data};
	}
	render() {
		const tableStyle = {
			backgroundColor: '#E1E2E1',
			border: '1px solid #F5F5F6',
			textAlign: 'center',
		};
		const speciesListStyle = {
			marginLeft: '0 auto',
			marginRight: '0 auto',
			width: '200px',
			position: 'absolute,'
		};
		const speciesItemStyle = {
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
				<div className='species-list' style={tableStyle, speciesListStyle}>
					{
						this.state.showInfo && <InfoCard species={this.props.species} currentSpeciesId={this.state.currentSpeciesId} />
					}
					{
						this.props.species.map((species, i) => (
							<div className='species-item' style={speciesItemStyle} key={i} onClick={this.onClick.bind(this, i)}>
								<h4>{species.name}</h4>
							</div>
						))
					}
				</div>
			</div>
		)
	}
}

