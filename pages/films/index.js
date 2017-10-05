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

export default class Films extends React.Component {
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
		const filmsRes = await axios.get('https://ghibliapi.herokuapp.com/films');
		return {films: filmsRes.data};
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
				<div className='films-list' style={tableStyle, filmsListStyle}>
					{
						this.state.showInfo && <InfoCard films={this.props.films} currentFilmId={this.state.currentFilmId} />
					}
					{
						this.props.films.map((film, i) => (
							<div className='film-item' style={filmItemStyle} key={i} onClick={this.onClick.bind(this, i)}>
								<h4>{film.title}</h4>
							</div>
						))
					}
				</div>
			</div>
		)
	}
}

