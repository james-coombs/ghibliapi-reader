import React from 'react';
import axios from 'axios';
import PageHead from '../../components/head';
import Link from 'next/link';
import Nav from '../../components/nav';

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
					<strong>Name:</strong> {this.props.people[this.props.currentPersonId].name}</li>
				<li>
					<strong>Gender:</strong> {this.props.people[this.props.currentPersonId].gender}</li>
				<li>
					<strong>Age:</strong> {this.props.people[this.props.currentPersonId].age}</li>
				<li>
					<strong>Eye Color:</strong> {this.props.people[this.props.currentPersonId].eye_color}</li>
				<li>
					<strong>Hair Color:</strong> {this.props.people[this.props.currentPersonId].hair_color}</li>
				<li>
					<strong>Films:</strong> {this.props.people[this.props.currentPersonId].films}</li>
				<li>
					<strong>Species:</strong> {this.props.people[this.props.currentPersonId].species}</li>
			</div>
		)
	}
}

export default class People extends React.Component {
	constructor() {
		super();
		this.state = {
			showInfo: false,
			currentPersonId: null,
		};
	}
	onClick(i){
		this.setState({showInfo: !this.state.showInfo, currentPersonId: i});
	}
	static async getInitialProps () {
		const peopleRes = await axios.get('https://ghibliapi.herokuapp.com/people');
		return {people: peopleRes.data};
	}
	render() {
		const tableStyle = {
			backgroundColor: '#E1E2E1',
			border: '1px solid #F5F5F6',
			textAlign: 'center',
		};
		const peopleListStyle = {
			marginLeft: '0 auto',
			marginRight: '0 auto',
			width: '200px',
			position: 'absolute,'
		};
		const peopleItemStyle = {
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
				<div className='people-list' style={tableStyle, peopleListStyle}>
					{
						this.state.showInfo && <InfoCard people={this.props.people} currentPersonId={this.state.currentPersonId} />
					}
					{
						this.props.people.map((people, i) => (
							<div className='people-item' style={peopleItemStyle} key={i} onClick={this.onClick.bind(this, i)}>
								<h4>{people.name}</h4>
							</div>
						))
					}
				</div>
			</div>
		)
	}
}

