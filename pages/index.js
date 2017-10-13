import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import PageHead from '../src/components/shared/head';
import Nav from '../src/components/shared/nav';

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
					<strong>Title:</strong> {this.props.films[this.props.currentFilmId].title}
				</li>
				<li>
					<strong>Description:</strong> {this.props.films[this.props.currentFilmId].description}
				</li>
				<li>
					<strong>Director:</strong> {this.props.films[this.props.currentFilmId].director}
				</li>
				<li>
					<strong>Producer:</strong> {this.props.films[this.props.currentFilmId].producer}
				</li>
				<li>
					<strong>Release Date:</strong> {this.props.films[this.props.currentFilmId].release_date}
				</li>
				<li>
					<strong>Rotten Tomatoes Score:</strong> {this.props.films[this.props.currentFilmId].rt_score}%
				</li>
			</div>
		)
	}
}

export default class Index extends React.Component {
	constructor() {
		super();
		this.state = {
			showInfo: false,
			currentFilmId: null,
		};
	}
	onClick(i){
		this.setState({showInfo: !this.state.showInfo, currentFilmId: i});
	}
	static async getInitialProps () {
		const getRandUrl = () => {
			const urlArr = ['films', 'locations', 'people', 'species', 'vehicles'];
			return urlArr[Math.floor(Math.random()*urlArr.length)];
		}

		const randCatagoryRes = await axios.get(`https://ghibliapi.herokuapp.com/${getRandUrl()}`);
		console.log(randCatagoryRes);
		return {
			catagory: randCatagoryRes.data,
			catLink: getRandUrl(),
		};
	}
	render() {
		const tableStyle = {
			backgroundColor: '#E1E2E1',
			border: '1px solid #F5F5F6',
			textAlign: 'center',
		};
		const filmsListStyle = {
			marginLeft: '0 auto',
			marginRight: '0 auto',
			width: '200px',
			position: 'absolute,'
		};
		const filmItemStyle = {
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
				<Link href={this.props.catLink}>
					<a>{this.props.catLink.toUpperCase()}</a>
				</Link>
				<div className='catagory-list' style={tableStyle, filmsListStyle}>
					{
						this.state.showInfo && <InfoCard catagory={this.props.catagory} currentFilmId={this.state.currentFilmId} />
					}
					{
						this.props.catagory.map((item, i) => (
							<div className='film-item' style={filmItemStyle} key={i}>
								<h4>{item.id}</h4>
							</div>
						))
					}
				</div>
			</div>
		)
	}
}

