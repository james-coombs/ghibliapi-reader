import Link from 'next/link';
import Confetti from 'react-dom-confetti';

export default class AppTitle extends React.Component {
	onClick() {
		console.log(this.props);
		this.props.isActive = !this.props.isActive;
	}
	render() {
		const config = {
			angle: 360,
			spread: 360,
			startVelocity: 25,
			elementCount: 200,
			decay: 0.9
		};

		let isActive = false;

		this.props = {isActive, config};

		let appTitleStyle = {
			fontSize: '2em',
			textAlign: 'center',
			width: '50%',
			margin: '0 auto',
			verticalAlign: 'middle',
			lineHeight: '30px',
		};
		let divStyle = {
			paddingBottom: '1em',
			paddingTop: '1em',
		};
		return (
			<div style={divStyle}>
				<h2 style={appTitleStyle} onClick={this.onClick.bind(this)}>Ghibli Reader</h2>
			</div>
		)
	}
}
